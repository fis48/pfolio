
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { appDataActions } from '../store/main-store';


const ContentForm = (props) => {

    const[title, setTitle] = useState('');
    const[description, setDescription] = useState("");
    const dispatch = useDispatch();

    const newContentHandle = (e) => {
        e.preventDefault();
        const addData = {
            section_id: props.section.id,
            title,
            description
        }

        // ?
        dispatch(appDataActions.addContent(addData));


        

        props.onContentChanges();
    }

    const implementTitle = (e) => {
        setTitle(e.target.value);
    }

    const implementDescription = (e) => {
        setDescription(e.target.value);
    }

    return (
        <div>
            <form onSubmit={newContentHandle}>
                <div className='field-container'>
                    <label htmlFor='title'>Título</label>
                    <input name="title" onChange={implementTitle}
                        type="text"></input>
                </div>
                <div className='field-container'>
                    <label htmlFor='description'>Description</label>
                    <textarea name="description" onChange={implementDescription}
                        type="text"></textarea>
                </div>
                <button>
                    Save
                </button>
            </form>
        </div>
    );
};

export default ContentForm;