import {BASE_URL} from "@/utils/constants.js";
import {addError, getToken, isAuthorized} from "@/utils/errors.js";

export async function sendPostRequest(urlPath, body) {
    const headers = {
        "Content-Type": "application/json",
    }
    if(isAuthorized()){
        headers["Authorization"] = "Bearer " + getToken();
    }
    console.log(headers);

    const response = await fetch(BASE_URL + urlPath, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(body),
    });

    const json = await response.json();

    if (json?.errorMessage !== undefined) {
        let error = json.errorMessage;
        if (json?.errors) {
            error += ": " + JSON.stringify(json.errors);
        }

        addError(error);
        return null;
    }

    return json;


}
