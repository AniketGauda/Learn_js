let obj = {
    "customerName": "xbvs",
    "mainContactNumber": "623556585995878",
    "nik": "6464455456565695",
    "nokk": "9494464694494599",
    "placeOfBirth": "gdgd",
    "email": "abc@abc.com",
    "idType": {
        "data": "{\"_id\":\"203586\",\"parentTransitionValueId\":\"\",\"isParentLinked\":false,\"parentTransitionTypeId\":\"\",\"s_id\":203586,\"cust_type\":\"1\",\"transitionTypeId\":\"76\",\"description\":\"ID Card (KTP)\",\"ref_code\":\"ID Card (KTP)\",\"status\":174,\"org_id\":1,\"org_type\":154,\"node_id\":1,\"crtd_by\":10001,\"crtd_userid\":10001,\"updtd_by\":30001,\"last_updt_userid\":30001,\"crtd_dt\":{\"$date\":\"2021-07-20T17:12:05.761Z\"},\"updtd_dt\":{\"$date\":\"2022-12-29T05:15:32.842Z\"},\"last_updt_dt\":{\"$date\":\"2022-12-29T05:15:32.837Z\"},\"updtd_dt_num\":20221229121532}",
        "label": "ID Card (KTP)",
        "value": "203586",
        "_index": 0
    },
    "dob": "11/22/1999",
    "ktpPhoto": "202411/20241122/50625/500000/1732253811357.jpeg",
    "selfiePhoto": "202411/20241122/50625/5030/1732253836599.jpeg",
    "sameAsCustomerAddress": true,
    "referenceName": "hdhf",
    "referenceContactNumber": "623456777888",
    "referenceRelationship": {
        "label": "Sibling",
        "value": "203610",
        "_index": 0
    },
    "address": {
        "Residential": {
            "value": "Residential",
            "id": "265",
            "building_name": "hdhd",
            "street_address": "eyey",
            "province": {
                "label": "Banten",
                "value": "203628",
                "_index": 0
            },
            "city": {
                "label": "Banten",
                "value": "203629",
                "_index": 0
            },
            "postal_code": {
                "label": "42117",
                "value": "203630",
                "_index": 0
            }
        },
        "IdCard": {
            "value": "Id Card",
            "id": "267",
            "building_name": "hdhd",
            "street_address": "eyey",
            "province": {
                "label": "Banten",
                "value": "203628",
                "_index": 0
            },
            "city": {
                "label": "Banten",
                "value": "203629",
                "_index": 0
            },
            "postal_code": {
                "label": "42117",
                "value": "203630",
                "_index": 0
            }
        }
    },
    "isIndo": true,
    "nationality": {
        "label": "Indonesian",
        "value": "1"
    },
    "biometricRes": []
}


let ans1 = ['','','','',''];
// ans1 += ' ---------Residential Details --------- ';
let robj = obj['address']['Residential'];

for(let key in robj) {
    if(key == 'building_name' && robj[key] !=''){
        // console.log(robj[key]);
        ans1[0] = robj[key];
    }
    else if(key == 'street_address' && robj[key]!=''){
        // console.log(robj[key]);
        // ans1+=", ";
        ans1[1] = robj[key];
    }
    else if(key == 'province'){
        let tmpObj = robj['province'];
        for(let tmpKey in tmpObj) {
            if(tmpKey == 'label' && tmpObj[tmpKey]!=''){
                // console.log(tmpObj[tmpKey]);
                // ans1+=", ";
                ans1[2] = tmpObj[tmpKey];
            }
        }
    }
    else if(key == 'city') {
        let tmpObj = robj['city'];
        for(let tmpKey in tmpObj) {
            if(tmpKey == 'label' && tmpObj[tmpKey]!=''){
                // console.log(tmpObj[tmpKey]);
                // ans1 += ", ";
                ans1[3] = tmpObj[tmpKey];
            }
        }
    }
    else if(key == 'postal_code') {
        let tmpObj = robj['postal_code'];
        for(let tmpKey in tmpObj) {
            if(tmpKey == 'label' && tmpObj[tmpKey]!=''){
                // console.log(tmpObj[tmpKey]);
                // ans1 +='-'
                ans1[4] = tmpObj[tmpKey];
            }
        }
    }
}

let x = 'Residential address:  ';
for(let i=0;i<5;i++) {
    if(ans1[i]!='') {
        x += ans1[i];
        if(i==3) {
            if(ans1[i+1]!='')
                x+='-';
        } else if(i!=4)
            x += ', ';
    }
}
console.log(x);



let ans2 = ['','','','',''];
// ans2 += ' ---------IdCard Details --------- ';
let iobj = obj['address']['IdCard'];

for(let key in iobj) {
    if(key == 'building_name' && iobj[key] !=''){
        // console.log(iobj[key]);
        ans2[0] = iobj[key];
    }
    else if(key == 'street_address' && iobj[key]!=''){
        // console.log(iobj[key]);
        // ans2 += ", ";
        ans2[1] = iobj[key];
    }
    else if(key == 'province'){
        let tmpObj = iobj['province'];
        for(let tmpKey in tmpObj) {
            if(tmpKey == 'label' && tmpObj[tmpKey]!=''){
                // console.log(tmpObj[tmpKey]);
                // ans2 += ", ";
                ans2[2] = tmpObj[tmpKey];
            }
        }
    }
    else if(key == 'city') {
        let tmpObj = iobj['city'];
        for(let tmpKey in tmpObj) {
            if(tmpKey == 'label' && tmpObj[tmpKey]!=''){
                // console.log(tmpObj[tmpKey]);
                // ans2 += ", ";
                ans2[3] = tmpObj[tmpKey];
            }
        }
    }
    else if(key == 'postal_code') {
        let tmpObj = iobj['postal_code'];
        for(let tmpKey in tmpObj) {
            if(tmpKey == 'label' && tmpObj[tmpKey]!=''){
                // console.log(tmpObj[tmpKey]);
                // ans2 += '-';
                ans2[4] = tmpObj[tmpKey];
            }
        }
    }
}

let y = 'IdCard Address:  ';
for(let i=0;i<5;i++) {
    if(ans2[i]!='') {
        y += ans2[i];
        if(i==3) {
            if(ans2[i+1]!='')
                y+='-';
        } else if(i!=4)
            y += ', ';
    }
}
console.log(y);