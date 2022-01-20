/**
 * Auto-generated action file for "Meisterplan API" API.
 *
 * Generated at: 2022-01-20T09:18:29.469Z
 * Mass generator version: 1.0.0
 *
 * : meisterplan-component
 * Copyright © 2020,  AG
 *
 * All files of this connector are licensed under the Apache 2.0 License. For details
 * see the file LICENSE on the toplevel directory.
 *
 *
 * Operation: 'createProject-Tu7aLsoUsingPOST'
 * Endpoint Path: '/v1/scenarios/{scenarioId}/projects'
 * Method: 'post'
 *
 */

// how to pass the transformation function... no need
// pass the meta data
// create a new Object
// emit the message with the new emit function

// securities and auth methods
// check how to make the new ferryman and its transform functions functional // no need

const Swagger = require("swagger-client");
const spec = require("../spec.json");
const { mapFieldNames } = require("../utils/helpers");

// parameter names for this call
const PARAMETERS = [
    "scenarioId"
];

// mappings from connector field names to API field names
const FIELD_MAP = {
    "scenarioId": "scenarioId",
    "projectKey": "projectKey",
    "name": "name",
    "start": "start",
    "finish": "finish",
    "externalId": "externalId",
    "costType": "costType",
    "notes": "notes",
    "id": "id",
    "manager": "manager",
    "value": "value",
    "status": "status",
    "businessGoal": "businessGoal",
    "hours": "hours",
    "days": "days",
    "approvedTotalEffort": "approvedTotalEffort",
    "customFields": "customFields",
    "obsUnits": "obsUnits",
    "program": "program",
    "category": "category",
    "position": "position",
    "rankCategory": "rankCategory",
    "priority": "priority",
    "requestBody": "requestBody"
};

function processAction(msg, cfg) {
  var isVerbose = process.env.debug || cfg.verbose;

  console.log("msg:", msg);
  console.log("cfg:", cfg);

  if (isVerbose) {
    console.log(`---MSG: ${JSON.stringify(msg)}`);
    console.log(`---CFG: ${JSON.stringify(cfg)}`);
    console.log(`---ENV: ${JSON.stringify(process.env)}`);
  }

  const contentType = 'application/json';

  const body = msg.data;
  mapFieldNames(body);

  let parameters = {};
  for (let param of PARAMETERS) {
    parameters[param] = body[param];
  }

  const oihUid =
    msg.metadata !== undefined && msg.metadata.oihUid !== undefined
      ? msg.metadata.oihUid
      : "oihUid not set yet";
  const recordUid =
    msg.metadata !== undefined && msg.metadata.recordUid !== undefined
      ? msg.metadata.recordUid
      : undefined;
  const applicationUid =
    msg.metadata !== undefined && msg.metadata.applicationUid !== undefined
      ? msg.metadata.applicationUid
      : undefined;

  const newElement = {};
  const oihMeta = {
    applicationUid,
    oihUid,
    recordUid,
  };

  // credentials for this operation
  let securities = {};
    securities['API-Token'] = cfg['key'];

  if (cfg.otherServer) {
    if (!spec.servers) {
      spec.servers = [];
    }
    spec.servers.push({ "url": cfg.otherServer });
  }

  let callParams = {
    spec: spec,
    operationId: 'createProject-Tu7aLsoUsingPOST',
    pathName: '/v1/scenarios/{scenarioId}/projects',
    method: 'post',
    parameters: parameters,
    requestContentType: contentType,
    requestBody: body,
    securities: { authorized: securities },
    server: spec.servers[cfg.server] || cfg.otherServer,
  };
  if (callParams.method === "get") {
    delete callParams.requestBody;
  }

  if (isVerbose) {
    let out = Object.assign({}, callParams);
    out.spec = "[omitted]";
    console.log(`--SWAGGER CALL: ${JSON.stringify(out)}`);
  }

  // Call operation via Swagger client
  return Swagger.execute(callParams).then((data) => {
    // emit a single message with data
    // console.log("swagger data:",data);
    delete data.uid;
    newElement.metadata = oihMeta;
    newElement.data = data.data;
    this.emit("data", newElement);

    // if the response contains an array of entities, you can emit them one by one:

    // data.obj.someItems.forEach((item) => {
    //     this.emitData(item);
    // }
  });
}

// this wrapers offers a simplified emitData(data) function
module.exports = { process: processAction };
