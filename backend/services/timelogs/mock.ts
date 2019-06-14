/*
 * Project: backend
 * Created Date: Tuesday June 4th 2019
 * Author: shpetimselaci : info@softup.co
 * -----
 * Copyright (c) 2019 Softup Technologies
 */

import moment from "moment";
import { IUser } from "./interfaces/user";

const date = moment().format('DD/MM/YYYY');
export const users: IUser[] = [
    {
        id: "1",
        name: "Shpetim Selaci",
        birthDate: date,
        title: "employee",
        username: "@s3l4ci",
        email: "shpetim.selaci@softup.co",
        password: "$2a$12$dBRTJc45fePzSKvGhN5deOr0de/jKZZyOYm2RtsFWoJrXuzJ03Xri"
    },
    {
        id: "2",
        name: "Kristi Kristo",
        birthDate: date,
        title: "boss",
        username: "@kristi",
        email: "kristi.kristo@softup.co",
        password: "$2a$12$FreOmYOIw91ZHqpUQ6DSiOMDwlg8riMx0E79EpKA0VJRJgxLVu30q"
    },
    {
        id: "3",
        name: "Stivi Ndoni",
        title: "employee",
        birthDate: date,
        username: "@stivo",
        email: "stivi.ndoni@softup.co",
        password: "$2a$12$kNn9JzmH0y1GREcEBO5T..cfVXQTgoqeZz4WPTToVdIzaZYrZBrqa"
    }
];

export const timelogs = [
    {
        id: "1",
        authorID: "1",
        log: "Softup",
    },
    {
        id: "2",
        authorID: "1",
        log: "Technologies",
    },
    {
        id: "3",
        authorID: "1",
        log: "<3",
    },
    {
        id: "4",
        authorID: "2",
        log: "Boss of",
    },
    {
        id: "5",
        authorID: "2",
        log: "Softup Technologies",
    },
    {
        id: "6",
        authorID: "2",
        log: "<3",
    },
    {
        id: "7",
        authorID: "3",
        log: "Softup",
    },
    {
        id: "8",
        authorID: "3",
        log: "Technologies",
    },
    {
        id: "9",
        authorID: "3",
        log: "<3",
    }
];