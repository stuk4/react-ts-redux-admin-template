import React from 'react'


export const haveRole = (userRoles:string[] | undefined,allowedRoles:string[]) => {
    console.log(userRoles?.find(role => allowedRoles.includes(role)) )
    return  userRoles?.find(role => allowedRoles.includes(role)) 
}
