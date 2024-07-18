import { api } from "./api";

const endpoints = {
  vehicles: "/vehicles/",
  vehicle: "/vehicles/",
  create: "/vehicles/create",
};

const renderVehicle = async (id) => {
  const record = await api.get(endpoints.vehicle + id);
  return record;
};

const renderVehicles = async () => {
  const records = await api.get(endpoints.vehicles);
  return records;
};

const createVehicle = async (vehicleData) => {
  console.log(vehicleData)
  const record = await api.post(endpoints.create, vehicleData);
  return record;
};

export const vehicleApi = {
  renderVehicle,
  renderVehicles,
  createVehicle,
};
