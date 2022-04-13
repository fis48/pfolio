
import { createSlice, configureStore } from "@reduxjs/toolkit";


const iniAppDataState = {
    sections: [
        { id: 'sect_home', name: 'home', title: 'Home', seoName: 'home' },
        { id: 'sect_webdev', name: 'webdev', title: 'Web development', seoName: 'web-development',
            headText: 'Desarrollo de front y backend con las tecnologías más robustas de la web: ' + 
                'PHP, MySql, HTML, CSS, Javascript, Angular y Firebase' +
                'Desarrollo software a medida orientado a la web. Buscando soluciones a sus ' + 
                'necesidades específicas construyo junto a usted sistemas eficientes, livianos' + 
                'e intuitivos que mejoran los procesos en su empresa.',
        },
        { id: 'sect_websites', name: 'websites', title: 'Web sites', seoName: 'web-sites' },
        { id: 'sect_mobile', name: 'mobile', title: 'Mobile apps', seoName: 'mobile' },
        { id: 'sect_contact', name: 'contact', title: 'Contact', seoName: 'contact' }
    ],
    contents: [
        {
            section_id: "sect_webdev",
            title: 'Sistema de control de horas',
            description: 'Software desarrollado en Angular y Firebase que permite la ' + 
                'creación de proyectos y trabajadores, así como el seguimiento detallado de '+ 
                'las horas de trabajo invertidas en cada proyecto a través de reportes gráficos.' + 
                'Puede usar los reportes sugeridos por el sistema y/o encargar el desarrollo de ' + 
                'reportes personalizados.',
            images: []
        },
        {
            section_id: "sect_webdev",
            title: 'Portal inmobiliario y CRM',
            description: 'Software desarrollado en Angular y Firebase que permite la ' + 
                'creación de proyectos y trabajadores, así como el seguimiento detallado de '+ 
                'las horas de trabajo invertidas en cada proyecto a través de reportes gráficos.' + 
                'Puede usar los reportes sugeridos por el sistema y/o encargar el desarrollo de ' + 
                'reportes personalizados.',
            images: []
        }
    ],
    sectionContent: []
};

const iniLoggedState = {

    email: 'mail@mail.com'

}

const loggedSlice = createSlice({
    name: "loggedSlice",
    initialState: iniLoggedState,
    reducers: {
        getUser() {

            console.log('get user');

        }
    }
    
});

const appDataSlice = createSlice({
    name: 'app-main-slice',
    initialState: iniAppDataState,
    reducers: {
        setSectionData(state, action) {
            const filtered = state.contents.filter(item => item.section_id == action.payload.id);
            state.sectionContent = filtered;
        },
        addContent(state, action) {
            const newContents = [...state.contents];
            state.contents.push(action.payload);


            // newContents.push(action.payload);
            // state.contents = newContents;
            // state.sectionContent = newContents;

            console.log(state.contents);
            // console.log(iniAppDataState.contents);
            // console.log(action.payload);
            // console.log(state.sectionContent);
        }
    }
});

const mainStore = configureStore({
    reducer: { appData: appDataSlice.reducer, loggedData: loggedSlice.reducer }
});

export const appDataActions = appDataSlice.actions;
export const loggedActions = loggedSlice.actions;

export default mainStore;