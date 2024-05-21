async function hetScoData() {
    let data = await fetch('https://api.eligo.cloud/wp-json/rankmath/v1/getHead?url=https://api.eligo.cloud/services/logo-design');
    let resp = await data.json();
    return resp;
}

export async function fetchscodata() {
    let scoData = await hetScoData();

    const metadata = {
        title: scoData.head.match(/<meta property="og:title" content="([^"]+)"/)?.[1] || '',
        description: scoData.head.match(/<meta property="og:description" content="([^"]+)"/)?.[1] || '',
        locale: scoData.head.match(/<meta property="og:locale" content="([^"]+)"/)?.[1] || '',
        type: scoData.head.match(/<meta property="og:type" content="([^"]+)"/)?.[1] || '',
        url: scoData.head.match(/<meta property="og:url" content="([^"]+)"/)?.[1] || '',
        siteName: scoData.head.match(/<meta property="og:site_name" content="([^"]+)"/)?.[1] || '',
        updatedTime: scoData.head.match(/<meta property="og:updated_time" content="([^"]+)"/)?.[1] || '',
        card: scoData.head.match(/<meta name="twitter:card" content="([^"]+)"/)?.[1] || '',
        twitterTitle: scoData.head.match(/<meta name="twitter:title" content="([^"]+)"/)?.[1] || '',
        twitterDescription: scoData.head.match(/<meta name="twitter:description" content="([^"]+)"/)?.[1] || ''
    };

   

    return metadata;
}
