import { baseUrl, api, methods } from "./config"

export const getTablets = () => {
    
    return  fetch(`${baseUrl}/${api}${methods.getTablets}`, {
        crossDomain: true,
        headers: { 'Content-Type': 'application/json' },

    })
        .then(res => res.json())
        .then(res => res)
        .catch(err => err)
}
export const selectTablet = (id) => {

    const form_data= new FormData()
    form_data.append('id_tablet', id)
    return fetch(`${baseUrl}/${api}${methods.select}`
        ,{

            method: 'POST',
            body: form_data,

        }
    )
        .then(res => res.json())
        .catch(err => err)
        .then(res => res)
}


export const sendM = (name, email, phone) => {

    const form_data = new FormData()
    form_data.append('name', name)
    form_data.append('email', email)
    form_data.append('phone', phone)

    return fetch(`${baseUrl}/${api}${methods.contact}`
        , {
            method: 'POST',
            body: form_data
        }
    )
        .then(res => res.json())
        .catch(err => err)
        .then(res => res)
}