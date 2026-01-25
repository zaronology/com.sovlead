import convertKitData from "./ConvertKitData"

export class ConvertKit {
    private apiKey: string;
    private ck_data = convertKitData;

    constructor(apiKey: string) {
        this.apiKey = apiKey;
    }

    async add_subscriber(data: any) {
        const endpoint = "subscribers";
        const pass = {
            ...data,
            first_name:data?.name?.split(' ')[0],
            fields:{
                last_name:data?.name?.split(' ')[1],
                company:data?.company_name,
                rh_source:data?.source,
            }
        }
        const response = await this.submit_information(endpoint, pass);
        return response.subscriber?.id ? {success:true, status:200} : { success:false, status:401, error:"An unexpected error occurred. Please try again later." };
    }
    async add_tag(email_address: string, tag_id: number) {
        const endpoint = `tags/${tag_id}/subscribers`;
        const pass = {
            email_address:email_address,
        }
        const response = await this.submit_information(endpoint, pass);
        return response.subscriber?.id ? {success:true, status:200} : { success:false, status:401, error:"An unexpected error occurred. Please try again later." };
    }

    async get_tag_id(tag_name: string){
        const tag_info = this.ck_data.tags.find((item)=>item.id===tag_name);
        return tag_info?.tag_id;
    }


    async submit_information(endpoint: string, data: any){
        try {
            const externalResponse = await fetch(`https://api.kit.com/v4/${endpoint}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                    "X-Kit-Api-Key": `${this.apiKey}`,
                },
                body: JSON.stringify(data),
            });

            const result = await externalResponse.json();
            if (result.errors) {
                return { success:false, error: "Unauthorized access", status:401};
            }
            return result;
        } catch (error) {
            console.error("Error making API request:", error);
            return { success:false, error: "Failed to communicate with external API", status:401};
        }
    }
}