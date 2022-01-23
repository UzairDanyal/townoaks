import { environment as env} from "src/environments/environment";

//const baseUrl="https://localhost:44322/api";
const baseUrl=env.production?env.baseUrlProd:env.baseUrlBeta;

export const EndPoints ={
    addUnit:`${baseUrl}/Units`,
    getAllUnit:`${baseUrl}/Units`,
    getUnit:`${baseUrl}/Units`,
    auth:`${baseUrl}/Auth/Login`
}
