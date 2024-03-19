export interface PastorData {
    pastorId?: string;
    img?: string;
    pastorName?: string;
    designation?: string;
}

export const Pastor: PastorData[] = [
    { 
        pastorId: "akinyemi",
        img: "/pastor/chuks.png", 
        pastorName: "Akinyemi", 
        designation: "Area Pastor",
    },
    { 
        pastorId: "francis",
        img: "/pastor/chuks.png", 
        pastorName: "Francis", 
        designation: "Asst. Pastor",
    },
    { 
        pastorId: "chuks",
        img: "/pastor/chuks.png", 
        pastorName: "Chuks", 
        designation: "Pastor",
    },
    { 
        pastorId: "olubori",
        img: "/pastor/chuks.png", 
        pastorName: "Olubori", 
        designation: "Pastor",
    },
    { 
        pastorId: "latest",
        img: "/pastor/chuks.png", 
        pastorName: "NewPastor", 
        designation: "Pastor",
    },
  ];