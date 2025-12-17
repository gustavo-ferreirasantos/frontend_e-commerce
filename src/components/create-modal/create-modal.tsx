import { useEffect, useState } from "react";
import { useProductDataMutate } from "../../hooks/useProductDataMutate";
import type { ProductData } from "../../interface/ProductData";
import "./modal.css"

interface InputProps{
    label: string;
    value: string | number;
    updateValue(value: any): void
}


const Input = ({label, value, updateValue}: InputProps) => {
    return(
        <>
            <label>{label}</label>
            <input value={value} onChange={event => updateValue(event.target.value)}></input>
        </>
    )
}

interface ModalProps{
    closeModal(): void
}


export function CreateModal({closeModal}: ModalProps){
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [image, setImage] = useState("");
    const {mutate, isSuccess, isPending} = useProductDataMutate();


    const submit = () => {
        const productData: ProductData = {
            title,
            price,
            image
        }

        mutate(productData)
    }


    useEffect(() => {
        if(!isSuccess) return
        closeModal();
    }, [isSuccess])


    return(
        <div className="modal-overlay">
            <div className="modal-body">
                <h2>Cadastre um novo produto</h2>
                <form action="input-container">
                    <Input label="title" value={title} updateValue={setTitle}/>
                    <Input label="price" value={price} updateValue={setPrice}/>
                    <Input label="image" value={image} updateValue={setImage}/>
                </form>
                <button onClick={submit} className="btn-secondary">
                    {isPending ? 'Criando...' : 'Criar'}
                </button>
            </div>
        </div>
    )
}