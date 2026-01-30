import { NextResponse } from "next/server";
import { ConvertKit } from "@/lib/convertKit";

export async function POST(request) {
    const apiKey = process.env.SECRET_KIT_API_KEY;
    let tagName = "voyage";
    if (!apiKey) {
      return NextResponse.json(
        { error: "API key is missing or not set" },
        { status: 500 }
      );
    }
    const ck = new ConvertKit(apiKey);
    const body = await request.json(); 
    if(body.email_address){
      const subscribe_result = await ck.add_subscriber(body);
      if(subscribe_result.success){
        tagName = body.tag_name ? body.tag_name : tagName;
        console.log(tagName);
        const tag_id = await ck.get_tag_id(tagName);
        const email_address = body.email_address;
        const tag_result = await ck.add_tag(email_address, tag_id);
        if(tag_result.success){
          return NextResponse.json(tag_result, { status: tag_result.status });
        }else{
          return NextResponse.json(tag_result, { status: tag_result.status });
        }
      }else{
        return NextResponse.json(subscribe_result, { status: subscribe_result.status });
      }
      
    }else{
      return NextResponse.json({success:false, error:"Email address missng"}, { status: 401 });
    }
    
  }