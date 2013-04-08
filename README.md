# OW2 Build Status

Get build status image of bamboo.ow2.org plans (a la travis-ci). The current OW2 service is deployed on Heroku at http://ow2bamboostatus.herokuapp.com.

## Usage

Append your plan name to the base URL to get your status image:

    http://ow2bamboostatus.herokuapp.com/status/MY_PLAN_NAME

## Sample

The image status of the plan running at [http://bamboo.ow2.org/browse/PETALSESB-PETALSESBCLTJMX](http://bamboo.ow2.org/browse/PETALSESB-PETALSESBCLTJMX "Petals ESB - Petals ESB - Client tools - Petals Admin - Petals JMX: Plan Summary - OW2 Bamboo") is 

    http://ow2bamboostatus.herokuapp.com/status/PETALSESB-PETALSESBCLTJMX

[![Build Status](http://ow2bamboostatus.herokuapp.com/status/PETALSESB-PETALSESBCLTJMX)(http://bamboo.ow2.org/browse/PETALSESB-PETALSESBCLTJMX])


## Misc...

Insert in your Github README.md file

    [![Build Status](http://ow2bamboostatus.herokuapp.com/status/PETALSESB-PETALSESBCLTJMX)(http://bamboo.ow2.org/browse/PETALSESB-PETALSESBCLTJMX])
