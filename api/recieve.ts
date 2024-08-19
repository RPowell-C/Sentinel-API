import table from './../table.json';

// this entire interface is useless but I don't want to delete because I spent so much effort on it
interface HashTable {
    filename: string;
    SentinelPy: string;
    packageJSON: string;
    packageLockJSON: string;
    README: string;
    requirementsTxt: string;
    functions: string;
    ApiPy: string;
    InternalFunctions: string;
    moderationPy: string;
    UCALPy: string;
    filesayPy: string;
    internalPy: string;
    settingsPy: string;
}


export default function handler(req, res) {
    res.status(200).json({message: 'sup', table });
}
