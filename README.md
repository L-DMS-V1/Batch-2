# Batch-2

#------Backend Module 1 --------#

# 1. Register User Endpoint
Method: POST

    URL: http://localhost:8081/api/auth/register
# Body (JSON)

    {
    "username": "User",
    "password": "Password",
     "role": "EMPLOYEE"  // or "ADMIN" // "MANAGER",
    "email": "example@example.com",
    "fullName": "Example User"
    }
    
# Response
    {
    "message": "User registered successfully"
    }

_____________________________________________________________
# 2. Login User Endpoint
Method: POST

    URL: http://localhost:8081/api/auth/login

# Body (JSON)
    {
    "username": "Username",
    "password": "Password"
    }

# Response

    {
    "token": "yourJwtTokenHere"
    }
_____________________________________________________________
# 3. Protected User Endpoint (Requires JWT Token)
Method: GET

    URL: http://localhost:8081/api/auth/User

# Authorization: 
Type < Select Bearer Token > and Paste the Generated Token.

# Response

    {
    "message": "This is a protected endpoint"
    }

