// request
POST /authenticators
{
    "isArtisan": false,
    "verificationStatus": "Pending",
    "timestamp": "2024-10-14 09:45:30",
    "artisans": [
        {
            "artisanId": "A1234",
            "artisanName": "John Doe",
            "businessName": "Golden Crafts LTD",
            "address": "Main Street 45, Amsterdam",
            "businessId": "B9876"
        },
        {
            "artisanId": "A1244",
            "artisanName": "Sarah Doe",
            "businessName": "Silver Crafts LTD",
            "address": "Main Street 48, Amsterdam",
            "businessId": "B4876"
        }
    ]
}



// response
{
    "message": "Verification request created successfully.",
    "result": {
        "id": 42,
        "isArtisan": false,
        "verificationStatus": "Pending",
        "timestamp": "2024-10-14 09:45:30",
        "authToken": "DGAHAGTDSH018736S",
        "artisans": [
            {
                "id": 20,
                "artisanId": "A1234",
                "artisanName": "John Doe",
                "businessName": "Golden Crafts LTD",
                "address": "Main Street 45, Amsterdam",
                "businessId": "B9876"
            },
            {
                "id": 21,
                "artisanId": "A1244",
                "artisanName": "Sarah Doe",
                "businessName": "Silver Crafts LTD",
                "address": "Main Street 48, Amsterdam",
                "businessId": "B4876"
            }
        ]
    }
}
 

//*************************************************************************************************************** */


// REQUEST request
POST /authenticators
{
    "isArtisan": true,
    "verificationStatus": "Approved",
    "timestamp": "2024-10-14 10:45:30",
    "artisans": [
        {
            "artisanId": "A1234",
            "artisanName": "John Doe",
            "businessName": "Golden Crafts LTD",
            "address": "Main Street 45, Amsterdam",
            "businessId": "B9876"
        },
        {
            "artisanId": "A1244",
            "artisanName": "Sarah Doe",
            "businessName": "Silver Crafts LTD",
            "address": "Main Street 48, Amsterdam",
            "businessId": "B4876"
        }
    ]
}



// response
{
    "message": "Verification status updated successfully.",
    "result": {
        "id": 42,
        "isArtisan": true,
        "verificationStatus": "Approved",
        "timestamp": "2024-10-14 10:46:30",
        "authToken": "DGAHAGTDSH018736S",
        "artisans": [
            {
                "id": 20,
                "artisanId": "A1234",
                "artisanName": "John Doe",
                "businessName": "Golden Crafts LTD",
                "address": "Main Street 45, Amsterdam",
                "businessId": "B9876"
            },
            {
                "id": 21,
                "artisanId": "A1244",
                "artisanName": "Sarah Doe",
                "businessName": "Silver Crafts LTD",
                "address": "Main Street 48, Amsterdam",
                "businessId": "B4876"
            }
        ]
    }
}
  