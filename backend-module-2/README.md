# -------------Module-2 Backend----------------

# 1. Get All Requests (GET /api/requests)
# Method: GET
    http://localhost:8080/api/requests
This endpoint retrieves all requests.

# Response (200 OK):


    {
        "id": 1,
        "program": "Java",
        "position": "Developer",
        "status": "COMPLETED",
        "date": "15/9/2024"
    },
    {
        "id": 2,
        "program": "React",
        "position": "Frontend Developer",
        "status": "PENDING",
        "date": "20/9/2024"
    }

    
 
# 2. Create a New Request (POST /api/requests)
# Method: POST
    http://localhost:8080/api/requests
# Request Body (JSON format):

    {
    "program": "JavaScript",
    "position": "Backend Developer",
    "status": "PENDING",
    "date": "25/9/2024"
    }
# Response (201 Created):

    {
    "id": 3,
    "program": "JavaScript",
    "position": "Backend Developer",
    "status": "PENDING",
    "date": "25/9/2024"
    }

    
# 3. Update a Request (PUT /api/requests/{id})
# Method: PUT
    http://localhost:8080/api/requests/{id} (Replace {id} with the ID of the request you want to update, e.g., http://localhost:8080/api/requests/1)
# Request Body (JSON format):

    {
    "program": "Java",
    "position": "Senior Developer",
    "status": "COMPLETED",
    "date": "15/9/2024"
    }
#  Response (200 OK):

    {
    "id": 1,
    "program": "Java",
    "position": "Senior Developer",
    "status": "COMPLETED",
    "date": "15/9/2024"
  }


  
# 4. Delete a Request (DELETE /api/requests/{id})
# Method: DELETE
    http://localhost:8080/api/requests/{id} (Replace {id} with the ID of the request you want to delete, e.g., http://localhost:8080/api/requests/1)
# Response (204 No Content):

    {
    
    }
