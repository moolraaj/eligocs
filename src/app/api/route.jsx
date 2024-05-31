import { allExportedApi } from '@/utils/apis/Apis';
import { NextResponse } from 'next/server';


export async function POST(req) {
  const { yourname, youremail, yournumber, yourmessage, recaptchaToken } = await req.json();

  const secret = process.env.RECAPTCHA_SECRET_KEY;
  const response = await fetch(`https://www.google.com/recaptcha/api/siteverify`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: `secret=${secret}&response=${recaptchaToken}`
  });

  const data = await response.json();

  if (!data.success) {
    return NextResponse.json({ success: false, error: 'reCAPTCHA validation failed' }, { status: 400 });
  }

  try {
    
    let api = allExportedApi();
    let formData = new FormData();
    formData.append('_wpcf7_unit_tag', 942);
    formData.append('yourname', yourname);
    formData.append('youremail', youremail);
    formData.append('yournumber', yournumber);
    formData.append('yourmessage', yourmessage);

    let response = await api.fetchContactFormApi({
      method: 'POST',
      body: formData,
    });
    console.log(response);
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Mail not sent!' }, { status: 400 });
  }
}
