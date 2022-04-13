
import React, { useCallback, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useLocation, Link, useNavigate } from 'react-router-dom';
import ContentForm from '../components/ContentForm';
import { appDataActions } from '../store/main-store';

const Section = () => {
    const location = useLocation();
    const section = location.state;
    const dispatch = useDispatch();
    const sectContent = useSelector(state => state.appData.sectionContent);
    const navigate = useNavigate();
    const [formVisible, setFormVisible] = useState(false);
    



    // console.log(sectContent);

    const setNewForm = (section) => {

        console.log('show adding form');
        console.log(section);

    }

    const changeContentsHandler = () => {

        console.log(section);
        // const disp = dispatch(appDataActions.setSectionData(section));
        
        // console.log('Section new contents');
        // console.log(sectContent);

    }



    useEffect(() => {
        const disp = dispatch(appDataActions.setSectionData(section));
    }, []);

    useCallback(() => {

        console.log('hola');

    }, [changeContentsHandler]);

    // useCallback(() => {

    //     console.log('hola');
    //     setFormVisible(true);


    // }, [setNewForm]);

    return (
        <div>
            <h1>{section.title}</h1>
            <Link to="/">Back</Link>
            <button onClick={(e) => { setNewForm(section) }}>
                Agregar contenido
            </button>
            
            <ContentForm section={section} onContentChanges={changeContentsHandler} />

            {/* items list */}
            <ul>
                {
                    sectContent.map((listItem) => (
                        <li key={listItem.title}>{listItem.title}</li>
                    ))
                }
            </ul>

        </div>
    );
};

export default Section;