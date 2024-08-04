import commonApi from "./commonApi";


export const addStudent=(data)=>{
    return commonApi("POST",'http://127.0.0.1:8000/employee/',data)
}
// view-employee
export const allStudent=()=>{
    return commonApi("GET",'http://127.0.0.1:8000/employee/',"")
}

//delete-employee

export const deleteStudent=(id)=>{
    return commonApi("DELETE",`http://127.0.0.1:8000/employee/${id}/`,"")
}

export const getStudent=(id)=>{
    return commonApi("GET",`http://127.0.0.1:8000/employee/${id}/`,"")

}

export const editStudent=(id,data)=>{
    return commonApi("PUT",`http://127.0.0.1:8000/employee/${id}/`,data)
}