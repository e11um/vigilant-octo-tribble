const country_and_states = {


    "country":{
        "Interpreting Quality": "Interpreting Quality",
        "Interpreter Behavior": "Interpreter Behavior",
        "Software": "Software",
        "Hardware": "Hardware",
        "Positive Feedback": "Positive Feedback",
        "Availability": "Availability",
        "Billing": "Billing",
        "Administration": "Administration"
      },

    

    "states":{
    "Interpreting Quality": [
        {
            "name": "Inaccurate renditions provided by the interpreter",
            "code": "IQ1"
        },
        {
            "name": "Poor language proficiency or knowledge of terminology demonstrated by the interpreter",
            "code": "IQ2"
        },
        {
            "name": "Failure to follow proper interpreting protocols/standards and practices",
            "code": "IQ3"
        },
       
    ],
    "Interpreter Behavior": [
        
             {
              "name": "Interpreter ended the session due to break, lunch, or shift ending",
              "code": "IB1"
            },
            {
              "name": "Interpreter demonstrated rude or unprofessional behavior, such as being argumentative",
              "code": "IB2"
            },
            {
              "name": "Interpreter's background or attire was unprofessional",
              "code": "IB3"
            },
            {
              "name": "Background noise was present during interpretation",
              "code": "IB4"
            },
            {
              "name": "Interpreter did not know how to use the system or used it incorrectly",
              "code": "IB5"
            },
            {
              "name": "Operator demonstrated an unprofessional demeanor",
              "code": "IB6"
            } 
    ],
    "Software":[
        {
            "name": "Disconnected before connecting to an interpreter",
            "code": "SW1"
          },
        {
            "name": "Took too long to connect to an interpreter",
            "code": "SW2"
          },
        {
            "name": "Disconnected while interpretation was in progress",
            "code": "SW3"
          },
        {
            "name": "Video software issues, such as unclear or pixelated video",
            "code": "SW4"
          },
        {
            "name": "Incorrect language interpreter connected",
            "code": "SW5"
          },
        {
            "name": "Audio software issues, such as unclear or crackly audio",
            "code": "SW6"
          },
        {
            "name": "Line rang but was not answered or silence on answer",
            "code": "SW7"
          }
    ],
    "Hardware": [
        
            {
              "name": "Issue with charging or power cable",
              "code": "HW1"
            },
            {
              "name": "Experiencing issues with microphone or camera on device",
              "code": "HW2"
            },
            {
              "name": "Screen is broken or damaged",
              "code": "HW3"
            },
            {
              "name": "Other problem with the device or equipment",
              "code": "HW4"
            }
    ],
    "Positive Feedback": [
        
            {
              "name": "Positive feedback for the interpreter",
              "code": "PF1"
            },
            {
              "name": "Positive feedback for the operator",
              "code": "PF2"
            },
            {
              "name": "Positive feedback for another employee involved in the service",
              "code": "PF3"
            }
    ],
    "Availability":[
    
            {
              "name": "Interpreter was unavailable at the requested date or time",
              "code": "AV1"
            },
            {
              "name": "Interpreter was absent for a scheduled appointment",
              "code": "AV2"
            },
            {
              "name": "Interpreter was late for a designated appointment time",
              "code": "AV3"
            },
            {
              "name": "Require support to schedule an appointment",
              "code": "AV4"
            }
        ],
    "Billing":[
        
            {
              "name": "Billing details were incorrect on an invoice",
              "code": "BL1"
            },
           {
              "name": "Insufficient billing details were provided on an invoice",
              "code": "BL2"
            }
        
    ],
    "Administration":[
        
            {
              "name": "Did not receive professional service from administrative staff",
              "code": "AD1"
            },
            {
              "name": "Did not receive a prompt response from administrative staff",
              "code": "AD2"
            }
          
          
    ]
        


}
}


//: https://cdn.jsdelivr.net/gh/e11um/vigilant-octo-tribble@a023e3a1eda29a3e901087e13facbb3413445374/feedbackform.js