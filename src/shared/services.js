import Helper from "shared/helper";
import { apiUrl as serverApi } from "config";

const GetEntityInfo = async (name) => {
    return new Promise(async (resolve) => {
        let url = `${serverApi}${name}`;

        try {
            const res = await fetch(url, {
                method: "GET",
                headers: {
                    "Content-type": "application/json"
                }
            });

            const json = await res.json();
            if (res.status === 200) {
                return resolve({ status: res.ok, values: json.value || [] });
            }

            return resolve({ status: false, statusText: json.error.message });

        } catch (error) {
            console.log(error);
            return resolve({ status: false, statusText: error.message });
        }
    });
}



 


	    
	 	
	
		
/* Trainings */

const GetTrainingsCount = async (query) => {
    return new Promise(async (resolve) => {
        let url = `${serverApi}Trainings/$count`;
        if (query) url = `${serverApi}Trainings/$count?${query}`;

        try {
            const res = await fetch(url, {
                method: "GET",
                headers: {
                    "Content-type": "application/json"
                }
            });

            const json = await res.json();
            if (res.status === 200) {
                return resolve({ status: res.ok, values: json || 0 });
            }

            return resolve({ status: false, statusText: json.error.message });

        } catch (error) {
            console.log(error);
            return resolve({ status: false, statusText: error.message });
        }
    })
}

const GetTrainingsMulti = async (query, expands) => {     return new Promise(async (resolve) => {

        let url = `${serverApi}Trainings`;
        if (query) url = `${serverApi}Trainings?${query}`;

        if (expands && query) url = `${url}&$expand=${expands}`;
        if (expands && !query) url = `${url}?$expand=${expands}`;
        
        try {
            const res = await fetch(url, {
                method: "GET",
                headers: {
                    "Content-type": "application/json"
                }
            });

            const json = await res.json();
            if (res.status === 200) {
                return resolve({ status: res.ok, values: json.value || [] });
            }

            return resolve({ status: false, statusText: json.error.message });

        } catch (error) {
            console.log(error);
            return resolve({ status: false, statusText: error.message });
        }
    });
}

const GetTrainingSingle = async (id, params, expands) => {     return new Promise(async (resolve) => {

        let url = `${serverApi}Trainings(${id})`;
        if (params) {
            url = `${serverApi}Trainings(${id})?${params}`;
        }
        if (expands) url = params ? `${url}&$expand=${expands}` : `${url}?&$expand=${expands}`;
        
        try {
			const res = await fetch(url, {
                method: "GET",
                headers: {
                    "Content-type": "application/json"
                }
            });

            const json = await res.json();
            if (res.status === 200) {
                return resolve({ status: res.ok, values: json || [] });
            }

            return resolve({ status: false, statusText: json.error.message });

        } catch (error) {
            console.log(error);
            return resolve({ status: false, statusText: error.message });
        }
    });
}

const SetTrainingSingle = async (input) => {     return new Promise(async (resolve) => {
        let id = input.TrainingsId;
        let method = "POST";
        let url = `${serverApi}Trainings`;
        if (input.TrainingsId && !input.Deleted) {
            method = "PATCH";
            url = `${serverApi}Trainings(${input.TrainingsId})`;
        } else if (input.TrainingsId && input.Deleted) {
            method = "DELETE";
            url = `${serverApi}Trainings(${input.TrainingsId})`;
        }

        delete input['TrainingsId'];
        delete input['Deleted'];

        try {
            const res = await fetch(url, {
                method, body: JSON.stringify(input),
                headers: {
                    "Content-type": "application/json"
                }
            });

            if (res.status === 201) {
                const json = await res.json();
                return resolve({ status: res.ok, id: json.TrainingsId });
            } else if (res.status === 200 || res.status === 204) {
                return resolve({ status: res.ok, id });
            } else {
                const json = await res.json();
                return resolve({ status: false, statusText: json.error.message });
            }

        } catch (error) {
            console.log(error);
            return resolve({ status: false, statusText: error.message });
        }
    });
}
     
	        	
	
	
	    
	 	
	
		
/* PerformanceAppraisals */

const GetPerformanceAppraisalsCount = async (query) => {
    return new Promise(async (resolve) => {
        let url = `${serverApi}PerformanceAppraisals/$count`;
        if (query) url = `${serverApi}PerformanceAppraisals/$count?${query}`;

        try {
            const res = await fetch(url, {
                method: "GET",
                headers: {
                    "Content-type": "application/json"
                }
            });

            const json = await res.json();
            if (res.status === 200) {
                return resolve({ status: res.ok, values: json || 0 });
            }

            return resolve({ status: false, statusText: json.error.message });

        } catch (error) {
            console.log(error);
            return resolve({ status: false, statusText: error.message });
        }
    })
}

const GetPerformanceAppraisalsMulti = async (query, expands) => {     return new Promise(async (resolve) => {

        let url = `${serverApi}PerformanceAppraisals`;
        if (query) url = `${serverApi}PerformanceAppraisals?${query}`;

        if (expands && query) url = `${url}&$expand=${expands}`;
        if (expands && !query) url = `${url}?$expand=${expands}`;
        
        try {
            const res = await fetch(url, {
                method: "GET",
                headers: {
                    "Content-type": "application/json"
                }
            });

            const json = await res.json();
            if (res.status === 200) {
                return resolve({ status: res.ok, values: json.value || [] });
            }

            return resolve({ status: false, statusText: json.error.message });

        } catch (error) {
            console.log(error);
            return resolve({ status: false, statusText: error.message });
        }
    });
}

const GetPerformanceAppraisalSingle = async (id, params, expands) => {     return new Promise(async (resolve) => {

        let url = `${serverApi}PerformanceAppraisals(${id})`;
        if (params) {
            url = `${serverApi}PerformanceAppraisals(${id})?${params}`;
        }
        if (expands) url = params ? `${url}&$expand=${expands}` : `${url}?&$expand=${expands}`;
        
        try {
			const res = await fetch(url, {
                method: "GET",
                headers: {
                    "Content-type": "application/json"
                }
            });

            const json = await res.json();
            if (res.status === 200) {
                return resolve({ status: res.ok, values: json || [] });
            }

            return resolve({ status: false, statusText: json.error.message });

        } catch (error) {
            console.log(error);
            return resolve({ status: false, statusText: error.message });
        }
    });
}

const SetPerformanceAppraisalSingle = async (input) => {     return new Promise(async (resolve) => {
        let id = input.AppraisalID;
        let method = "POST";
        let url = `${serverApi}PerformanceAppraisals`;
        if (input.AppraisalID && !input.Deleted) {
            method = "PATCH";
            url = `${serverApi}PerformanceAppraisals(${input.AppraisalID})`;
        } else if (input.AppraisalID && input.Deleted) {
            method = "DELETE";
            url = `${serverApi}PerformanceAppraisals(${input.AppraisalID})`;
        }

        delete input['AppraisalID'];
        delete input['Deleted'];

        try {
            const res = await fetch(url, {
                method, body: JSON.stringify(input),
                headers: {
                    "Content-type": "application/json"
                }
            });

            if (res.status === 201) {
                const json = await res.json();
                return resolve({ status: res.ok, id: json.AppraisalID });
            } else if (res.status === 200 || res.status === 204) {
                return resolve({ status: res.ok, id });
            } else {
                const json = await res.json();
                return resolve({ status: false, statusText: json.error.message });
            }

        } catch (error) {
            console.log(error);
            return resolve({ status: false, statusText: error.message });
        }
    });
}
     
	        	
	
	
	    
	 	
	
		
/* Organizations */

const GetOrganizationsCount = async (query) => {
    return new Promise(async (resolve) => {
        let url = `${serverApi}Organizations/$count`;
        if (query) url = `${serverApi}Organizations/$count?${query}`;

        try {
            const res = await fetch(url, {
                method: "GET",
                headers: {
                    "Content-type": "application/json"
                }
            });

            const json = await res.json();
            if (res.status === 200) {
                return resolve({ status: res.ok, values: json || 0 });
            }

            return resolve({ status: false, statusText: json.error.message });

        } catch (error) {
            console.log(error);
            return resolve({ status: false, statusText: error.message });
        }
    })
}

const GetOrganizationsMulti = async (query, expands) => {     return new Promise(async (resolve) => {

        let url = `${serverApi}Organizations`;
        if (query) url = `${serverApi}Organizations?${query}`;

        if (expands && query) url = `${url}&$expand=${expands}`;
        if (expands && !query) url = `${url}?$expand=${expands}`;
        
        try {
            const res = await fetch(url, {
                method: "GET",
                headers: {
                    "Content-type": "application/json"
                }
            });

            const json = await res.json();
            if (res.status === 200) {
                return resolve({ status: res.ok, values: json.value || [] });
            }

            return resolve({ status: false, statusText: json.error.message });

        } catch (error) {
            console.log(error);
            return resolve({ status: false, statusText: error.message });
        }
    });
}

const GetOrganizationSingle = async (id, params, expands) => {     return new Promise(async (resolve) => {

        let url = `${serverApi}Organizations(${id})`;
        if (params) {
            url = `${serverApi}Organizations(${id})?${params}`;
        }
        if (expands) url = params ? `${url}&$expand=${expands}` : `${url}?&$expand=${expands}`;
        
        try {
			const res = await fetch(url, {
                method: "GET",
                headers: {
                    "Content-type": "application/json"
                }
            });

            const json = await res.json();
            if (res.status === 200) {
                return resolve({ status: res.ok, values: json || [] });
            }

            return resolve({ status: false, statusText: json.error.message });

        } catch (error) {
            console.log(error);
            return resolve({ status: false, statusText: error.message });
        }
    });
}

const SetOrganizationSingle = async (input) => {     return new Promise(async (resolve) => {
        let id = input.OrganizationID;
        let method = "POST";
        let url = `${serverApi}Organizations`;
        if (input.OrganizationID && !input.Deleted) {
            method = "PATCH";
            url = `${serverApi}Organizations(${input.OrganizationID})`;
        } else if (input.OrganizationID && input.Deleted) {
            method = "DELETE";
            url = `${serverApi}Organizations(${input.OrganizationID})`;
        }

        delete input['OrganizationID'];
        delete input['Deleted'];

        try {
            const res = await fetch(url, {
                method, body: JSON.stringify(input),
                headers: {
                    "Content-type": "application/json"
                }
            });

            if (res.status === 201) {
                const json = await res.json();
                return resolve({ status: res.ok, id: json.OrganizationID });
            } else if (res.status === 200 || res.status === 204) {
                return resolve({ status: res.ok, id });
            } else {
                const json = await res.json();
                return resolve({ status: false, statusText: json.error.message });
            }

        } catch (error) {
            console.log(error);
            return resolve({ status: false, statusText: error.message });
        }
    });
}
     
	        	
   		
	
	    
	 	
	
		
/* EmployeePersonalInfoes */

const GetEmployeePersonalInfoesCount = async (query) => {
    return new Promise(async (resolve) => {
        let url = `${serverApi}EmployeePersonalInfoes/$count`;
        if (query) url = `${serverApi}EmployeePersonalInfoes/$count?${query}`;

        try {
            const res = await fetch(url, {
                method: "GET",
                headers: {
                    "Content-type": "application/json"
                }
            });

            const json = await res.json();
            if (res.status === 200) {
                return resolve({ status: res.ok, values: json || 0 });
            }

            return resolve({ status: false, statusText: json.error.message });

        } catch (error) {
            console.log(error);
            return resolve({ status: false, statusText: error.message });
        }
    })
}

const GetEmployeePersonalInfoesMulti = async (query, expands) => {     return new Promise(async (resolve) => {

        let url = `${serverApi}EmployeePersonalInfoes`;
        if (query) url = `${serverApi}EmployeePersonalInfoes?${query}`;

        if (expands && query) url = `${url}&$expand=${expands}`;
        if (expands && !query) url = `${url}?$expand=${expands}`;
        
        try {
            const res = await fetch(url, {
                method: "GET",
                headers: {
                    "Content-type": "application/json"
                }
            });

            const json = await res.json();
            if (res.status === 200) {
                return resolve({ status: res.ok, values: json.value || [] });
            }

            return resolve({ status: false, statusText: json.error.message });

        } catch (error) {
            console.log(error);
            return resolve({ status: false, statusText: error.message });
        }
    });
}

const GetEmployeePersonalInfoSingle = async (id, params, expands) => {     return new Promise(async (resolve) => {

        let url = `${serverApi}EmployeePersonalInfoes(${id})`;
        if (params) {
            url = `${serverApi}EmployeePersonalInfoes(${id})?${params}`;
        }
        if (expands) url = params ? `${url}&$expand=${expands}` : `${url}?&$expand=${expands}`;
        
        try {
			const res = await fetch(url, {
                method: "GET",
                headers: {
                    "Content-type": "application/json"
                }
            });

            const json = await res.json();
            if (res.status === 200) {
                return resolve({ status: res.ok, values: json || [] });
            }

            return resolve({ status: false, statusText: json.error.message });

        } catch (error) {
            console.log(error);
            return resolve({ status: false, statusText: error.message });
        }
    });
}

const SetEmployeePersonalInfoSingle = async (input) => {     return new Promise(async (resolve) => {
        let id = input.Id;
        let method = "POST";
        let url = `${serverApi}EmployeePersonalInfoes`;
        if (input.Id && !input.Deleted) {
            method = "PATCH";
            url = `${serverApi}EmployeePersonalInfoes(${input.Id})`;
        } else if (input.Id && input.Deleted) {
            method = "DELETE";
            url = `${serverApi}EmployeePersonalInfoes(${input.Id})`;
        }

        delete input['Id'];
        delete input['Deleted'];

        try {
            const res = await fetch(url, {
                method, body: JSON.stringify(input),
                headers: {
                    "Content-type": "application/json"
                }
            });

            if (res.status === 201) {
                const json = await res.json();
                return resolve({ status: res.ok, id: json.Id });
            } else if (res.status === 200 || res.status === 204) {
                return resolve({ status: res.ok, id });
            } else {
                const json = await res.json();
                return resolve({ status: false, statusText: json.error.message });
            }

        } catch (error) {
            console.log(error);
            return resolve({ status: false, statusText: error.message });
        }
    });
}
     
	        	
	
	
	    
	 	
	
		
/* EmlpoyeeProfiles */

const GetEmlpoyeeProfilesCount = async (query) => {
    return new Promise(async (resolve) => {
        let url = `${serverApi}EmlpoyeeProfiles/$count`;
        if (query) url = `${serverApi}EmlpoyeeProfiles/$count?${query}`;

        try {
            const res = await fetch(url, {
                method: "GET",
                headers: {
                    "Content-type": "application/json"
                }
            });

            const json = await res.json();
            if (res.status === 200) {
                return resolve({ status: res.ok, values: json || 0 });
            }

            return resolve({ status: false, statusText: json.error.message });

        } catch (error) {
            console.log(error);
            return resolve({ status: false, statusText: error.message });
        }
    })
}

const GetEmlpoyeeProfilesMulti = async (query, expands) => {     return new Promise(async (resolve) => {

        let url = `${serverApi}EmlpoyeeProfiles`;
        if (query) url = `${serverApi}EmlpoyeeProfiles?${query}`;

        if (expands && query) url = `${url}&$expand=${expands}`;
        if (expands && !query) url = `${url}?$expand=${expands}`;
        
        try {
            const res = await fetch(url, {
                method: "GET",
                headers: {
                    "Content-type": "application/json"
                }
            });

            const json = await res.json();
            if (res.status === 200) {
                return resolve({ status: res.ok, values: json.value || [] });
            }

            return resolve({ status: false, statusText: json.error.message });

        } catch (error) {
            console.log(error);
            return resolve({ status: false, statusText: error.message });
        }
    });
}

const GetEmlpoyeeProfileSingle = async (id, params, expands) => {     return new Promise(async (resolve) => {

        let url = `${serverApi}EmlpoyeeProfiles(${id})`;
        if (params) {
            url = `${serverApi}EmlpoyeeProfiles(${id})?${params}`;
        }
        if (expands) url = params ? `${url}&$expand=${expands}` : `${url}?&$expand=${expands}`;
        
        try {
			const res = await fetch(url, {
                method: "GET",
                headers: {
                    "Content-type": "application/json"
                }
            });

            const json = await res.json();
            if (res.status === 200) {
                return resolve({ status: res.ok, values: json || [] });
            }

            return resolve({ status: false, statusText: json.error.message });

        } catch (error) {
            console.log(error);
            return resolve({ status: false, statusText: error.message });
        }
    });
}

const SetEmlpoyeeProfileSingle = async (input) => {     return new Promise(async (resolve) => {
        let id = input.EmpID;
        let method = "POST";
        let url = `${serverApi}EmlpoyeeProfiles`;
        if (input.EmpID && !input.Deleted) {
            method = "PATCH";
            url = `${serverApi}EmlpoyeeProfiles(${input.EmpID})`;
        } else if (input.EmpID && input.Deleted) {
            method = "DELETE";
            url = `${serverApi}EmlpoyeeProfiles(${input.EmpID})`;
        }

        delete input['EmpID'];
        delete input['Deleted'];

        try {
            const res = await fetch(url, {
                method, body: JSON.stringify(input),
                headers: {
                    "Content-type": "application/json"
                }
            });

            if (res.status === 201) {
                const json = await res.json();
                return resolve({ status: res.ok, id: json.EmpID });
            } else if (res.status === 200 || res.status === 204) {
                return resolve({ status: res.ok, id });
            } else {
                const json = await res.json();
                return resolve({ status: false, statusText: json.error.message });
            }

        } catch (error) {
            console.log(error);
            return resolve({ status: false, statusText: error.message });
        }
    });
}
     
	        	
   	   	   		
	
 


// Below is a reference function - a possible business logic for ecom reference app
const GetProductStatus = async (productId) => {
    return new Promise(async (resolve) => {
        let url = `${serverApi}ProductOnBoardings?$filter=ProductId eq ${productId}`;

        try {
            const res = await fetch(url, {
                method: "GET",
                headers: {
                    "Content-type": "application/json"
                }
            });

            const json = await res.json();
            if (res.status === 200) {
                let _tmp = { Status: '' };
                if (json.value && json.value.length > 0) {
                    _tmp = json.value[0];
                }
                return resolve({ status: res.ok, values: _tmp });
            }

            return resolve({ status: false, statusText: json.error.message });

        } catch (error) {
            console.log(error);
            return resolve({ status: false, statusText: error.message });
        }
    });
}




const GetMetaData = async () => {
    return new Promise(async (resolve) => {
        let url = `${serverApi}$metadata`;

        try {
            const res = await fetch(url, {
                method: "GET",
                headers: {
                    "Content-type": "application/json"
                }
            });
            if (res.status === 200) {
                const values = await res.text();
                return resolve({ status: res.ok, values });
            }

            return resolve({ status: false, statusText: "Failed fetching data" });

        } catch (error) {
            console.log(error);
            return resolve({ status: false, statusText: error.message });
        }
    });
}

/* Prodict List View Details */
const GetProductOnBoardings = async () => {
    return new Promise(async (resolve) => {
        let url = `${serverApi}ProductOnBoardings`;

        try {
            const res = await fetch(url, {
                method: "GET",
                headers: {
                    "Content-type": "application/json"
                }
            });

            const json = await res.json();
            if (res.status === 200) {
                return resolve({ status: res.ok, values: json.value });
            }

            return resolve({ status: false, statusText: json.error.message });

        } catch (error) {
            console.log(error);
            return resolve({ status: false, statusText: error.message });
        }
    });
}

export {
 GetEntityInfo,  GetTrainingsCount, GetTrainingsMulti, GetTrainingSingle, SetTrainingSingle, GetPerformanceAppraisalsCount, GetPerformanceAppraisalsMulti, GetPerformanceAppraisalSingle, SetPerformanceAppraisalSingle, GetOrganizationsCount, GetOrganizationsMulti, GetOrganizationSingle, SetOrganizationSingle, GetEmployeePersonalInfoesCount, GetEmployeePersonalInfoesMulti, GetEmployeePersonalInfoSingle, SetEmployeePersonalInfoSingle, GetEmlpoyeeProfilesCount, GetEmlpoyeeProfilesMulti, GetEmlpoyeeProfileSingle, SetEmlpoyeeProfileSingle, GetProductStatus, GetMetaData, GetProductOnBoardings
};
