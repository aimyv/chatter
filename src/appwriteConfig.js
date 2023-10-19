import { Client, Databases, Account } from 'appwrite';

export const PROJECT_ID = '652ee6a5d325d32fa05e'
export const DATABASE_ID = '652ee7b99aaad1a340b0'
export const COLLECTION_ID_MESSAGES = '652ee7c378f06107f858'

const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('652ee6a5d325d32fa05e');

export const databases = new Databases(client);
export const account = new Account(client);

export default client;
