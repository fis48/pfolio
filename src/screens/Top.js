
import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from 'react-router-dom';
import { appDataActions } from '../store/main-store';

const Top = () => {
    const appSections = useSelector(state => state.appData.sections);
    const navigate = useNavigate();

    const seeSection = (section) => {
        navigate(`/${section.seoName}`, {state: section});
    }

    // console.log(appSections);
    // dispatch(appDataActions.redFunc());

    return (
        <div>
            {
                appSections.map((section) => (
                    <button key={section.id} onClick={(e) => { seeSection(section); }}>
                       { section.title } 
                    </button>

                    // <Link to={{
                    //     pathname: `/${section.seoName}`,
                    //     state: section
                    // }} 
                    //     key={section.id}>{section.title}
                    // </Link>
                ))
            }
        </div>
    );
};

export default Top;