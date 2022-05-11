import { Appwrite } from "appwrite";

const sdk = new Appwrite();

sdk
    .setEndpoint('http://localhost/v1') // Your API Endpoint
    .setProject('627918ca4420039a2b73') // Your project ID
;  

export const createUser = (email,password,name)=>{
    return sdk.account.create(email,password,name);
}

export const loginUser = (email,password)=>{
    return sdk.account.createSession(email,password);
}

export const getCurrentUser = () =>{
    return sdk.account.get();
}
export const signInWithGoogle = ()=>{
    return sdk.account.createOAuth2Session('google','http://localhost:3000', 'http://localhost:3000/#/login');

}

export const logoutUser = ()=>{
    return sdk.account.deleteSession('current');
}

//display current user name
export const getCurrentUserName = ()=>{
    const user = getCurrentUser();
    return user.name;
}
  





