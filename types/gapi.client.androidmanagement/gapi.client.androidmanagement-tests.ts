/* This is stub file for gapi.client.{{=it.name}} definition tests */
/* IMPORTANT.
* This file was automatically generated by https://github.com/Bolisov/google-api-typings-generator. Please do not edit it manually.
* In case of any problems please post issue to https://github.com/Bolisov/google-api-typings-generator
**/
gapi.load('client', () => {
    /** now we can use gapi.client */
    gapi.client.load('androidmanagement', 'v1', () => {
        /** now we can use gapi.client.androidmanagement */

        /** don't forget to authenticate your client before sending any request to resources: */
        /** declare client_id registered in Google Developers Console */
        const client_id = '<<PUT YOUR CLIENT ID HERE>>';
        const scope = [
            /** Manage Android devices and apps for your customers */
            'https://www.googleapis.com/auth/androidmanagement',
        ];
        const immediate = true;
        gapi.auth.authorize({ client_id, scope, immediate }, authResult => {
            if (authResult && !authResult.error) {
                /** handle succesfull authorization */
                run();
            } else {
                /** handle authorization error */
            }
        });
        run();
    });

    async function run() {
        /** Creates an enterprise by completing the enterprise signup flow. */
        await gapi.client.enterprises.create({
            enterpriseToken: "enterpriseToken",
            projectId: "projectId",
            signupUrlName: "signupUrlName",
        });
        /** Gets an enterprise. */
        await gapi.client.enterprises.get({
            name: "name",
        });
        /** Updates an enterprise. */
        await gapi.client.enterprises.patch({
            name: "name",
            updateMask: "updateMask",
        });
        /** Creates an enterprise signup URL. */
        await gapi.client.signupUrls.create({
            callbackUrl: "callbackUrl",
            projectId: "projectId",
        });
    }
});