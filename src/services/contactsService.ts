import localData from "../assets/data/contacts.json";
import { Contact } from "../models/DTOs/Contact";

const API_URL = import.meta.env.VITE_API_URL;

export async function getContactsData() {
  //if (import.meta.env.VITE_USE_LOCAL_DATA === "true") {
    return localData;
  //}

  try {
    const response = await fetch(`${API_URL}/homescreen`);
    if (!response.ok) throw new Error("Failed to fetch homescreen data");
    return response.json();
  } catch (error) {
    console.error("HomescreenService error:", error);
    throw error;
  }
}

export async function getFavoriteContacts() {
  return localData.filter(contact => contact.favorite);
}