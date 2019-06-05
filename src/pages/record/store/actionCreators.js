import * as constants from './constants';
import axios from 'axios';

const modifyData= (form) =>({
    type: constants.GET_DATA,
    form
})

export const getData =()=>{
    return (dispatch)=>{
        axios.get('/api/record.json').then(res=>{
            const form = res.data.data;
           dispatch(modifyData(form))
            console.log(form.data)
        }).catch(err=>{
            console.log(err)
        })
    }
}

