/* 2-JoinsRefresher
 * ((( SOLUTION )))
 * -/-/-/-/-/-/-/-/ */


// STUDENTS: HOW WOULD YOU ACCOMPLISH THESE JOINS?
// ===============================================

// Before anything, run the commands laid out in the schema.sql file


// 1. How would we grab every app in our database released for both Android and ios (using the string 'both', not the int 3)
// ===
SELECT app FROM apps LEFT JOIN os ON apps.os_id=os.id WHERE os='both';

OR, WITH SEQUELIZE:
App.hasOne(models.OS)
app.getOS()
// 2. How would we grab only the app made by Apple (using Apple's name, not their id)
// ===
SELECT app FROM apps LEFT JOIN devs ON apps.d_id=devs.id WHERE dev="Apple"; 

OR WITH SEQUELIZE:
App.hasOne(models.Dev)
app.getDev()

// 3. How would we display all app info except ids, including the name of the dev and the name of os
// NOTE: THIS IS A HARD ONE
// ===


SELECT apps.app, os.os, devs.dev FROM apps 
JOIN os ON apps.os_id=os.id 
JOIN devs ON apps.d_id=devs.id;

OR WITH SEQUELIZE:
App.hasOne(models.OS)
App.hasOne(models.Dev)
App.findAll(include: [{model:OS}, model:Dev}])