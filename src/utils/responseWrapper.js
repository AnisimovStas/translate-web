import {BASE_URL} from "@/utils/constants.js";
import {addError} from "@/utils/errors.js";

export async function sendPostRequest(urlPath, body) {
    const response = await fetch(BASE_URL + urlPath, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
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
