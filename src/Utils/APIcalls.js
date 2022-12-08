//SUPPLIER

export const addSupplier = async (supplier) => {

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(supplier)
    };

    const response = await fetch("http://localhost:8080/supplier", requestOptions);
    return response.status;
}

export const getAllSuppliers = async () => {
    
    const response = await fetch("http://localhost:8080/suppliers");
    const data = await response.json();
    
    return data; 
}

export const deleteSupplier = async (id) => {

    const requestOptions = {
        method: 'DELETE',
    };

    const response = await fetch(`http://localhost:8080/supplier/${id}`, requestOptions);
}

export const getSupplier = async (supplier) => {
    
    const response = await fetch(`http://localhost:8080/supplier/${supplier}`);
    const data = await response.json();
    
    return data; 
}

export const updateSupplier = async (supplier) => {

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(supplier)
    };

    const response = await fetch(`http://localhost:8080/supplier/${supplier.name}`, requestOptions);
    return response.status;
}

//DELIVERIES

export const addDelivery = async (delivery) => {

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(delivery)
    };

    const response = await fetch(`http://localhost:8080/delivery`, requestOptions);
    return response.status;
}

export const searchDeliveryBySupplier = async(supplier) => {

    const response = await fetch(`http://localhost:8080/deliveries/supplier=${supplier}`);
    const data = await response.json();

    return data;

}


//EQUIPMENT

export const addEquipment = async (item) => {

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(item)
    };

    const response = await fetch(`http://localhost:8080/equipment`, requestOptions);
    return response.status;
}

export const getAllEquipment = async () => {
    
    const response = await fetch("http://localhost:8080/equipments");
    const data = await response.json();
    
    return data; 
}

export const deleteEquipment = async (serial) => {

    const requestOptions = {
        method: 'DELETE',
    };

    const response = await fetch(`http://localhost:8080/equipment/${serial}`, requestOptions);
}

export const getEquipment = async (serial) => {
    
    const response = await fetch(`http://localhost:8080/equipment/serial=${serial}`);
    const data = await response.json();
    
    return data; 
}

export const updateEquipment = async (equipment) => {

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(equipment)
    };

    const response = await fetch(`http://localhost:8080/supplier/${equipment.serialNumber}`, requestOptions);
    return response.status;
}

//TEMPERATURES

export const addTemperature = async (temperature) => {

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(temperature)
    };

    const response = await fetch("http://localhost:8080/temperature", requestOptions);
    return response.status;
}