# <p align="center" width="100%"> <img src="./logo.png" width="250" height="250"> </p> 
# <p align="center" width="100%"> Meisterplan API OIH Connector </p>

## Description

A generated OIH connector for the Meisterplan API API (version 1.2.0).

Generated from: https://api.eu.meisterplan.com/swagger.json<br/>
Generated at: 2021-05-31T09:20:31+02:00

## API Description

# Introduction<br/>
<br/>
The Meisterplan API provides machine-readable access to a Meisterplan system via an HTTP-based JSON REST interface.<br/>
This page will show you how to [get started](#section/Get-Started), and how you can [use the API to interact with your Meisterplan system](#section/General-Information).<br/>
<br/>
## Reporting API<br/>
Want to load data into external BI tools? Create reports using the [Reporting API](https://help.meisterplan.com/hc/en-us/articles/360013641220), which provides data optimized for reporting.<br/>
<br/>
## Versioning and Changes<br/>
<br/>
We will continuously expand this API's functionality and add bug fixes (see the changelog [here](https://help.meisterplan.com/hc/en-us/articles/360024302652-Meisterplan-REST-API-Changelog)).<br/>
For best results, make sure your code can handle new JSON properties and does not depend on the order in which JSON objects are returned by the API, unless explicitly stated here.<br/>
<br/>
## Support<br/>
<br/>
If you have any questions, email us at [support@meisterplan.com](mailto:support@meisterplan.com) - we're happy to help!<br/>
<br/>
[API Changelog](https://help.meisterplan.com/hc/en-us/articles/360024302652-Meisterplan-REST-API-Changelog)<br/>
<br/>
[Meisterplan Help Center](https://help.meisterplan.com/)<br/>
<br/>
[Meisterplan Terms of Service](https://meisterplan.com/terms-of-service/)<br/>
<br/>
# Authentication<br/>
<br/>
You will need a [Meisterplan system](#section/Get-Started/Meisterplan-System) and an [API Token](#section/Authentication/API-Token) for your<br/>
 user.<br/>
You can then proceed to look at the [examples](#section/Get-Started).<br/>
Please also take a look at the [general information](#section/General-Information) which will give you an overview of how the API works.<br/>
<br/>
## API Token<br/>
<br/>
You can generate API tokens via the Meisterplan user interface.<br/>
Please take a look at the [help center](https://help.meisterplan.com/hc/en-us/articles/360028700752-REST-API-Manage-API-Tokens) how to generate API tokens.<br/>
Your token will look like this: `api-48eba51e5a8d43ed8a8daeba585b7093`.<br/>
Note that the letters `api-` are part of the token.<br/>
With this token, you can start building your integration.<br/>
If you need more help, see [this page](https://help.meisterplan.com/hc/en-us/articles/360028700752-Manage-REST-API-Tokens).<br/>
<br/>
# Get Started<br/>
<br/>
The following examples will use [cURL](https://curl.haxx.se/) to show you how to use the API from the command line.<br/>
<br/>
## Meisterplan System<br/>
<br/>
Start by getting an API token from your Meisterplan system (free trials available at [meisterplan.com/trial](https://meisterplan.com/trial/)).<br/>
The API URL of your Meisterplan system will depend on your region, either `https://api.us.meisterplan.com/v1/` for<br/>
 the US or `https://api.eu.meisterplan.com/v1` for the EU.<br/>
You do not have to specify your system name in the URL, as it is already encoded in the [API token](#section/Get-Started/API-Token).<br/>
<br/>
Let's assume you have a [Meisterplan system](#section/Get-Started/Meisterplan-System) in the US and the [API token](#section/Get-Started/API-Token) `api-xxx`.<br/>
<br/>
## Headers<br/>
<br/>
To perform your own requests against the API, you must provide an `Authorization` header on every HTTP request.<br/>
<br/>
```<br/>
Authorization: "api-xxx"<br/>
```<br/>
<br/>
An HTTP status code 401 will be returned if you are not authorized to access the API.<br/>
<br/>
Additionally, all `PATCH` and `POST` requests require you to specify the accepted MIME type with the following header:<br/>
```<br/>
Content-Type: application/json<br/>
```<br/>
<br/>
<br/>
## Resources<br/>
<br/>
**Please note**: The following examples assume you're running an [`sh`-compatible](https://en.wikipedia.org/wiki/Bourne_shell) shell or `cmd.exe` and have access to the [`curl`](https://curl.haxx.se/) command. Using `curl` in [MicroSoft PowerShell](https://docs.microsoft.com/en-us/powershell/) will **not** trigger the `curl` command, but will instead call [`Invoke-RestMethod`](https://docs.microsoft.com/en-us/powershell/module/Microsoft.PowerShell.Utility/Invoke-RestMethod?view=powershell-5.1), which has an incompatible command argument syntax. Using `curl` is not a necessary prerequisite to using the Meisterplan REST API, and you are free to use any tool that suits your requirements.<br/>
<br/>
The following call will [create a new resource](#operation/createResourceUsingPOST) in your Meisterplan instance:<br/>
<br/>
`sh`-compatible shell:<br/>
```<br/>
curl -s "https://api.us.meisterplan.com/v1/resources" \<br/>
  -H "Authorization: api-xxx" \<br/>
  -H "Content-Type: application/json" \<br/>
  --data "{ \"lastName\": \"Stine\", \"firstName\": \"Brandon\" }"<br/>
```<br/>
<br/>
Windows Console (`cmd.exe`):<br/>
```<br/>
curl -s "https://api.us.meisterplan.com/v1/resources" ^<br/>
  -H "Authorization: api-xxx" ^<br/>
  -H "Content-Type: application/json" ^<br/>
  --data "{ \"lastName\": \"Stine\", \"firstName\": \"Brandon\" }"<br/>
```<br/>
<br/>
The answer will look similar to the following (the internal and external IDs will be different for your response):<br/>
<br/>
```<br/>
{<br/>
  "id" : "50703a7a-9285-4ffe-9e29-47187c454ade",<br/>
  "firstName" : "Brandon",<br/>
  "lastName" : "Stine",<br/>
  "externalId" : "96bb0fbc-a7e0-4ee3-b456-dbf390960268",<br/>
  // … more fields<br/>
}<br/>
```<br/>
<br/>
You can [retrieve your new resouce](#operation/getResourceByIdUsingGET) using its ID:<br/>
<br/>
`sh`-compatible shell:<br/>
```<br/>
curl -s "https://api.us.meisterplan.com/v1/resources/50703a7a-9285-4ffe-9e29-47187c454ade" \<br/>
  -H "Authorization: api-xxx"<br/>
```<br/>
<br/>
Windows Console (`cmd.exe`):<br/>
```<br/>
curl -s "https://api.us.meisterplan.com/v1/resources/50703a7a-9285-4ffe-9e29-47187c454ade" ^<br/>
  -H "Authorization: api-xxx"<br/>
```<br/>
<br/>
You can [update a resource](#operation/updateResourceUsingPATCH) using the `PATCH` method. Let's give Brandon an email address:<br/>
<br/>
`sh`-compatible shell:<br/>
```<br/>
curl -s "https://api.us.meisterplan.com/v1/resources/50703a7a-9285-4ffe-9e29-47187c454ade" \<br/>
  -H "Authorization: api-xxx" \<br/>
  -H "Content-Type: application/json" \<br/>
  --data "{ \"emailAddress\": \"brandon.stines@example.com\" }" \<br/>
  -X PATCH<br/>
```<br/>
<br/>
Windows Console (`cmd.exe`):<br/>
```<br/>
curl -s "https://api.us.meisterplan.com/v1/resources/50703a7a-9285-4ffe-9e29-47187c454ade" ^<br/>
  -H "Authorization: api-xxx" ^<br/>
  -H "Content-Type: application/json" ^<br/>
  --data "{ \"emailAddress\": \"brandon.stines@example.com\" }" ^<br/>
  -X PATCH<br/>
```<br/>
<br/>
You will notice that the email field in the response is now set to the new email address:<br/>
<br/>
```<br/>
{<br/>
  "id" : "50703a7a-9285-4ffe-9e29-47187c454ade",<br/>
  "firstName" : "Brandon",<br/>
  "lastName" : "Stine",<br/>
  "emailAddress" : "brandon.stines@example.com",<br/>
  // …<br/>
}<br/>
```<br/>
<br/>
You can also [list all available resources](#operation/getAllResourcesUsingGET) by omitting the ID:<br/>
<br/>
`sh`-compatible shell:<br/>
```<br/>
curl -s "https://api.us.meisterplan.com/v1/resources" \<br/>
  -H "Authorization: api-xxx"<br/>
```<br/>
<br/>
Windows Console (`cmd.exe`):<br/>
```<br/>
curl -s "https://api.us.meisterplan.com/v1/resources" ^<br/>
  -H "Authorization: api-xxx"<br/>
```<br/>
<br/>
The answer will look like this:<br/>
<br/>
```<br/>
{<br/>
  "items": [<br/>
    // …all resources<br/>
  ]<br/>
  "_pagination": {<br/>
    "after": {<br/>
      "cursor": "ZjkyYjU1MDItNTAwYi00Yzg1LWEwOGItMzllZWU1NWE4ZTlk"<br/>
    }<br/>
  }<br/>
}<br/>
```<br/>
<br/>
The resource endpoint is [paginated](#section/General-Information/Pagination).<br/>
Let's get some more resources:<br/>
<br/>
`sh`-compatible shell:<br/>
```<br/>
curl -s "https://api.us.meisterplan.com/v1/resources?pageSize=16&pageAfter=MDAzNWQ5MDctOTZkNi00MzdjLWE4MmUtMzNiZDBjNjdiNmM1" \<br/>
  -H "Authorization: api-xxx"<br/>
```<br/>
<br/>
Windows Console (`cmd.exe`):<br/>
```<br/>
curl -s "https://api.us.meisterplan.com/v1/resources?pageSize=16&pageAfter=MDAzNWQ5MDctOTZkNi00MzdjLWE4MmUtMzNiZDBjNjdiNmM1" ^<br/>
  -H "Authorization: api-xxx"<br/>
```<br/>
<br/>
If no more resources are available in your system, the request will return an empty list.<br/>
<br/>
## Projects and Scenarios<br/>
<br/>
[Projects](#tag/Projects) are linked to their [scenarios](#tag/Scenarios) in Meisterplan.<br/>
You can only address projects through their scenario ID.<br/>
You can query Meisterplan for [all scenarios](#operation/getAllScenariosUsingGET):<br/>
<br/>
`sh`-compatible shell:<br/>
```<br/>
curl -s "https://api.us.meisterplan.com/v1/scenarios" \<br/>
  -H "Authorization: api-xxx"<br/>
```<br/>
<br/>
Windows Console (`cmd.exe`):<br/>
```<br/>
curl -s "https://api.us.meisterplan.com/v1/scenarios" ^<br/>
  -H "Authorization: api-xxx"<br/>
```<br/>
<br/>
The answer will look like this:<br/>
<br/>
```<br/>
{<br/>
  "items" : [ {<br/>
    "id" : "2b45a678-8bd3-4e5e-acd9-1e817b530204",<br/>
    "name" : "Proposed Portfolio going forward"<br/>
  }, {<br/>
    "id" : "7a36777f-00d7-dd0b-2468-95aa94f90e63",<br/>
    "name" : "Plan of Record"<br/>
  } ]<br/>
}<br/>
```<br/>
<br/>
You can then use a scenario's ID to retrieve a project.<br/>
Note that the special scenario *Plan of Record* always exists.<br/>
You can use it in the URL instead of using its ID.<br/>
Let's [retrieve all projects](#operation/getAllProjects-AMtyOPcUsingGET) in the *Plan of Record*:<br/>
<br/>
`sh`-compatible shell:<br/>
```<br/>
curl -s "https://api.us.meisterplan.com/v1/scenarios/PlanOfRecord/projects" \<br/>
  -H "Authorization: api-xxx"<br/>
```<br/>
<br/>
Windows Console (`cmd.exe`):<br/>
```<br/>
curl -s "https://api.us.meisterplan.com/v1/scenarios/PlanOfRecord/projects" ^<br/>
  -H "Authorization: api-xxx"<br/>
```<br/>
<br/>
<br/>
You can also create new projects and edit existing ones just like you can resources.<br/>
Let's [create a new project](#operation/createProject-QWGM0WIUsingPOST) in the *Plan of Record* with Brandon as its project manager:<br/>
<br/>
`sh`-compatible shell:<br/>
```<br/>
curl -s "https://api.us.meisterplan.com/v1/scenarios/PlanOfRecord/projects" \<br/>
  -H "Authorization: api-xxx" \<br/>
  -H "Content-Type: application/json" \<br/>
  --data "{ \"name\": \"Company-wide roll-out of Meisterplan\", \"start\": \"2020-01-31\", \"finish\": \"2020-02-14\", \"manager\": { \"id\": \"50703a7a-9285-4ffe-9e29-47187c454ade\" } }"<br/>
```<br/>
<br/>
Windows Console (`cmd.exe`):<br/>
```<br/>
curl -s "https://api.us.meisterplan.com/v1/scenarios/PlanOfRecord/projects" ^<br/>
  -H "Authorization: api-xxx" ^<br/>
  -H "Content-Type: application/json" ^<br/>
  --data "{ \"name\": \"Company-wide roll-out of Meisterplan\", \"start\": \"2020-01-31\", \"finish\": \"2020-02-14\", \"manager\": { \"id\": \"50703a7a-9285-4ffe-9e29-47187c454ade\" } }"<br/>
```<br/>
<br/>
Notice how we've provided Brandon's *internal ID* to link him to the new project as its project manager.<br/>
<br/>
# General Information<br/>
<br/>
## HTTP Methods<br/>
<br/>
The Meisterplan API recognizes the HTTP methods: `POST`, `GET`, and `PATCH` and `DELETE`.<br/>
They correspond to the _create_, _read_, _update_ and _delete_ operations.<br/>
The endpoints for creating and updating an entity will always respond with the newly created or updated entity in their response payload.<br/>
If successful, `POST` endpoints will respond with HTTP status code `201` and `PATCH` with endpoints with `200`.<br/>
Deleting an entity will result in no body and an HTTP status code `204`, if successful.<br/>
<br/>
### HTTP Method Override<br/>
<br/>
If your firewall does not permit certain HTTP methods from being executed, you may override the HTTP request method with the `X-HTTP-Method-Override` header. The following request:<br/>
<br/>
    POST /v1/resources/123 HTTP/1.1<br/>
    X-HTTP-Method-Override: PATCH<br/>
<br/>
will be interpreted as a `PATCH` request against the resource with the id `123` by the server.<br/>
<br/>
## IDs<br/>
<br/>
All entities carry an internal Meisterplan ID in the JSON property `id`, which can be used for reference in other requests, or for updates and deletions.<br/>
Additionally, Meisterplan allows you to set a **unique** `externalId` for some entities.<br/>
The `externalId` can be used to cross-reference a Meisterplan entity with your own system.<br/>
The `externalId` is never used by Meisterplan.<br/>
<br/>
## Pagination<br/>
<br/>
Some endpoints return paginated data.<br/>
In order to access the next page, an opaque cursor is provided in the response to your `GET` request, which can be passed as a query parameter `pageAfter` on a subsequent request.<br/>
You can control the page size with the `pageSize` query parameter.<br/>
The following URL will return 16 items following the given opaque cursor:<br/>
<br/>
```<br/>
https://api.us.meisterplan.com/v1/resources?pageSize=16&pageAfter=MDAzNWQ5MDctOTZkNi00MzdjLWE4MmUtMzNiZDBjNjdiNmM1<br/>
```<br/>
<br/>
## Filtering<br/>
<br/>
In order to find a certain entity, all paginated endpoints allow for filtering using the `filter` query parameter.<br/>
The filter will look for entities matching _all_ of the provided values _exactly_.<br/>
All properties of the filter object are optional.<br/>
An empty filter results in all entities being returned.<br/>
Filter values of `null` are ignored.<br/>
The following URL will retrieve all resources with the external id `brandon.s`:<br/>
<br/>
```<br/>
https://api.us.meisterplan.com/v1/resources?filter={"externalId":"brandon.s"}<br/>
```<br/>
<br/>
Note that depending on your environment, you may need to URL-Encode the filter:<br/>
<br/>
```<br/>
https://api.us.meisterplan.com/v1/resources?filter=%7B%22externalId%22%3A%22brandon.s%22%7D<br/>
```<br/>
<br/>
Not all fields can be used in a filter.<br/>
To see which fields are available, refer to the endpoint's documentation.<br/>
Look for the `filter` query parameter and the example model, which lists all available fields.<br/>
<br/>
## Updating Fields<br/>
<br/>
Fields of existing entities can be updated via HTTP `PATCH`. In order to delete a field’s content, or replace it with its default value, if any, set the field to `null`. Only the specified fields will be changed. Fields not specified in the `PATCH` body will not be affected.<br/>
<br/>
Nested objects **are not** deleted recursively by setting their parent property to `null`. Delete the respective sub-fields by individually setting them to `null`. Fields whose values are objects with only **one** property (such as a resource’s `calendar` or `primaryRole` whose only sub-field is `path` and `id`, respectively) **are the exception**. You can delete a resource’s association with a given calendar or primary role by setting `{ "calendar": null }` or `{ "primaryRole": null }`.<br/>
<br/>
## Error Handling<br/>
<br/>
The error messages generated by the Meisterplan API follow the [JSON API specification](https://jsonapi.org/examples/#error-objects) on error objects.<br/>
If your request was not valid, HTTP status code 400 will be returned, along with a JSON object detailing the cause of the error.<br/>
<br/>
If you did not have sufficient permissions to perform the request (e.g. attempting to access a field for which you have no permission), HTTP status code 403 will be returned.<br/>
<br/>
## Dates<br/>
<br/>
### Format<br/>
The Meisterplan API uses the [ISO8601 date format](https://www.iso.org/iso-8601-date-and-time-format.html) for all dates:<br/>
<br/>
`YYYY-MM-DD`<br/>
<br/>
For example, September 27, 2020 is represented as `2020-09-27`.<br/>
<br/>
The earliest possible date is `1970-01-01`. The latest possible date is `2079-07-02`.<br/>
<br/>
### Time Periods<br/>
Start dates of time periods are interpreted as the beginning of a day.<br/>
For example, `2020-09-27` will be interpreted as September 27, 2020 at 12:00am.<br/>
<br/>
Finish dates of time periods are interpreted as the end of a day.<br/>
For example, `2020-09-27` will be interpreted as September 27, 2020 at 11:59pm.<br/>
<br/>
## Rate Limiting<br/>
<br/>
In order to prevent outages and to make sure the API is fast for everyone, the Meisterplan API will rate limit requests.<br/>
The API allows for at least 300 requests per minute, per user.<br/>
Please ensure you do not call the API with multiple concurrent requests, as some requests cannot be performed in parallel.<br/>
If you have exceeded the rate limit, an HTTP status code 429 will be returned.<br/>
If you happen to be rate-limited, we recommend you use [exponential backoff](https://en.wikipedia.org/wiki/Exponential_backoff) method for retries.<br/>
We reserve the right to change these guidelines to ensure the API's availability.<br/>

## Authorization

Supported authorization schemes:
- API Key


## Actions

### Create Resources
> Creates a resource by the given fields and returns the newly created.<br/>
> <br/>
> <h4>Paths</h4><p>Paths delimited by <tt>/</tt> (e.g. in calendars and OBS unit paths)<br/>
>     may define path segments which contain <tt>/</tt> by escaping with <tt>//</tt>. E.g. the path<br/>
>     <tT>Europe/Berlin//Amsterdam</tt> will be interpreted as <tt>['Europe', 'Berlin/Amsterdam']</tt>.<br/>
>     An uneven amount of slashes will be interpreted as the following segment starting with one or more slashes.</p><br/>

*Tags:* `Resources`

### Get Resources by ID
> Returns the individual resource specified by the given ID.<br/>

*Tags:* `Resources`

#### Input Parameters
* `resourceId` - _required_ - Internal Meisterplan identifier<br/>

### Delete Resources
> Delete the resource specified by the given ID. If the resource with the given ID does not exist, the request fails.<br/>

*Tags:* `Resources`

#### Input Parameters
* `resourceId` - _required_ - Internal Meisterplan identifier<br/>

### Update Resources
> Perform an update on a resource specified by the given ID.<br/>
> <br/>
> <h4>Paths</h4><p>Paths delimited by <tt>/</tt> (e.g. in calendars and OBS unit paths)<br/>
>     may define path segments which contain <tt>/</tt> by escaping with <tt>//</tt>. E.g. the path<br/>
>     <tT>Europe/Berlin//Amsterdam</tt> will be interpreted as <tt>['Europe', 'Berlin/Amsterdam']</tt>.<br/>
>     An uneven amount of slashes will be interpreted as the following segment starting with one or more slashes.</p><br/>

*Tags:* `Resources`

#### Input Parameters
* `resourceId` - _required_ - Internal Meisterplan identifier<br/>

### Update Deviations from the Calendar
> You can use this request to replace the calendar deviations of a resource for a certain period of time.<br/>
> This time period can be defined using the root start and finish attributes of the request.<br/>
> Under the deviations property all deviations of a resource can be specified using a list.<br/>
> It should be noted that all deviations in the specified period are overwritten by the deviations listed in the <b>deviations</b> property.<br/>
> <ul><li> If null is used for the start period and end period, all calendar deviations of the resource are overwritten</li><br/>
> <li> If only the start date of the period is defined, all deviations starting from this time will be overwritten</li><br/>
> <li> If only the end date of the period is defined, all deviations up to that point will be overwritten</li><br/>
> <li> If null is used for the start and/or end date of a calendar deviation, the deviation is assumed to last from or until the root start or finish date specified above.<br/>
> </ul>All deviations are flattened into a sequential structure. Cases of overlapping deviations will be resolved by giving precedence to deviations occurring later in the array.<br/>

*Tags:* `Resources`

#### Input Parameters
* `resourceId` - _required_ - Internal Meisterplan identifier<br/>

### Create Roles
> Returns the created role on success.<h4>Paths</h4><p>Paths delimited by <tt>/</tt> (e.g. in calendars and OBS unit paths)<br/>
>     may define path segments which contain <tt>/</tt> by escaping with <tt>//</tt>. E.g. the path<br/>
>     <tT>Europe/Berlin//Amsterdam</tt> will be interpreted as <tt>['Europe', 'Berlin/Amsterdam']</tt>.<br/>
>     An uneven amount of slashes will be interpreted as the following segment starting with one or more slashes.</p><br/>

*Tags:* `Roles`

### Get Roles by ID
> Returns the individual role specified by the given ID.<br/>

*Tags:* `Roles`

#### Input Parameters
* `roleId` - _required_ - Internal Meisterplan identifier<br/>

### Update Roles
> Perform an update on a role specified by the given ID. To do a partial update, only the updated fields need to be sent. To delete a field value, the field must be sent with an explicit null value. Fields with a default value will be reset to their default when set to null.<h4>Paths</h4><p>Paths delimited by <tt>/</tt> (e.g. in calendars and OBS unit paths)<br/>
>     may define path segments which contain <tt>/</tt> by escaping with <tt>//</tt>. E.g. the path<br/>
>     <tT>Europe/Berlin//Amsterdam</tt> will be interpreted as <tt>['Europe', 'Berlin/Amsterdam']</tt>.<br/>
>     An uneven amount of slashes will be interpreted as the following segment starting with one or more slashes.</p><br/>

*Tags:* `Roles`

#### Input Parameters
* `roleId` - _required_ - Internal Meisterplan identifier<br/>

### Get Scenarios by ID
> Returns the individual scenario specified by the given ID. <br> <b>Hint</b>:<br/>
> You can use "planOfRecord" as the ID for the plan of record scenario.<br/>

*Tags:* `Scenarios`

#### Input Parameters
* `scenarioId` - _required_ - Internal Meisterplan identifier<br/>

### Update Priorities
> This endpoint updates the priorities of projects and programs. Please consider that updating the priority of a project that is within a program results in unassigning the project from its program.<br/>

*Tags:* `Priorities`

#### Input Parameters
* `scenarioId` - _required_ - Internal Meisterplan identifier<br/>

### Create Programs
> Creates a program with the given fields and returns the newly created program.<br/>

*Tags:* `Programs`

#### Input Parameters
* `scenarioId` - _required_ - Internal Meisterplan identifier<br/>

### Delete Programs
> Deletes a program specified by the given ID.<br/>

*Tags:* `Programs`

#### Input Parameters
* `programId` - _required_ - Internal Meisterplan identifier<br/>
* `scenarioId` - _required_ - Internal Meisterplan identifier<br/>

### Update Programs
> Perform an update on a program specified by the given ID.<br/>

*Tags:* `Programs`

#### Input Parameters
* `programId` - _required_ - Internal Meisterplan identifier<br/>
* `scenarioId` - _required_ - Internal Meisterplan identifier<br/>

### Create Projects
> Creates a project with the given fields and returns the newly created project.<br/>
> <h3>Notes:</h3><br/>
> <h4>Paths</h4><p>Paths delimited by <tt>/</tt> (e.g. in calendars and OBS unit paths)<br/>
>     may define path segments which contain <tt>/</tt> by escaping with <tt>//</tt>. E.g. the path<br/>
>     <tT>Europe/Berlin//Amsterdam</tt> will be interpreted as <tt>['Europe', 'Berlin/Amsterdam']</tt>.<br/>
>     An uneven amount of slashes will be interpreted as the following segment starting with one or more slashes.</p><br/>
> <h4>Custom Fields</h4><p>Custom fields are defined <b>as properties of</b> the <tt>customFields</tt> object.<br/>
>     The property name of a custom field corresponds to its column name. A custom field is an object containing a value.<br/>
> The value can be of type string, number or boolean depending on the type of custom field. You can view all available custom fields with their respective<br/>
> column names in your Meisterplan system.</p><br/>
> <p><br/>
> For custom fields of type string, text, lookup or url, the value is of JSON type string.<br><br/>
> For custom fields of type integer, decimal or currency, the value is of JSON type float.<br><br/>
> For custom fields of type boolean, the value is of JSON type boolean.<br><br/>
> </p><br/>
> <p><br/>
> Example:<br/>
> </p><br/>
> <pre><br/>
> "customFields":{<br/>
>   "cust_stage_gate":{<br/>
>     "value": "New"<br/>
>   }<br/>
>   ...<br/>
> }<br/>
> </pre><br/>
> <br/>
> <br/>
> <h4>Priorities</h4><br/>
> <p>Projects may be assigned to a program, or they can be given a rank category. It is not possible to assign a<br/>
> project to a rank category and a program at the same time. Assigning an existing project to a rank category will<br/>
> unassign it from any program it may be assigned to. Assigning an existing project to a program may mean that its rank<br/>
>  category changes, if the target program is in a different rank category.<br/>
> </p><br/>
> <p><br/>
> It is currently not possible to prioritize projects within a program.<br/>
> </p><br/>

*Tags:* `Projects`

#### Input Parameters
* `scenarioId` - _required_ - Internal Meisterplan identifier<br/>

### Get Projects by ID
> Returns the individual project specified by the given ID.<br/>

*Tags:* `Projects`

#### Input Parameters
* `projectId` - _required_ - Internal Meisterplan identifier<br/>
* `scenarioId` - _required_ - Internal Meisterplan identifier<br/>

### Delete Projects
> Deletes a project in a given scenario.<br/>

*Tags:* `Projects`

#### Input Parameters
* `projectId` - _required_ - Internal Meisterplan identifier<br/>
* `scenarioId` - _required_ - Internal Meisterplan identifier<br/>

### Update Projects
> Perform an update on a project specified by the given ID.<br/>
> <br/>
> <h4>Paths</h4><p>Paths delimited by <tt>/</tt> (e.g. in calendars and OBS unit paths)<br/>
>     may define path segments which contain <tt>/</tt> by escaping with <tt>//</tt>. E.g. the path<br/>
>     <tT>Europe/Berlin//Amsterdam</tt> will be interpreted as <tt>['Europe', 'Berlin/Amsterdam']</tt>.<br/>
>     An uneven amount of slashes will be interpreted as the following segment starting with one or more slashes.</p><br/>
> <h4>Custom Fields</h4><p>Custom fields are defined <b>as properties of</b> the <tt>customFields</tt> object.<br/>
>     The property name of a custom field corresponds to its column name. A custom field is an object containing a value.<br/>
> The value can be of type string, number or boolean depending on the type of custom field. You can view all available custom fields with their respective<br/>
> column names in your Meisterplan system.</p><br/>
> <p><br/>
> For custom fields of type string, text, lookup or url, the value is of JSON type string.<br><br/>
> For custom fields of type integer, decimal or currency, the value is of JSON type float.<br><br/>
> For custom fields of type boolean, the value is of JSON type boolean.<br><br/>
> </p><br/>
> <p><br/>
> Example:<br/>
> </p><br/>
> <pre><br/>
> "customFields":{<br/>
>   "cust_stage_gate":{<br/>
>     "value": "New"<br/>
>   }<br/>
>   ...<br/>
> }<br/>
> </pre><br/>
> <br/>
> <br><h4>A note on Project Finish</h4><p><br/>
>     Please consider that an update of the finish date of a project deletes all milestones and allocation segments that exist after the new project finish date.<br/>
> </p><br/>

*Tags:* `Projects`

#### Input Parameters
* `projectId` - _required_ - Internal Meisterplan identifier<br/>
* `scenarioId` - _required_ - Internal Meisterplan identifier<br/>

### Create or Update Allocations
> Creates or updates allocations for a given project.<br/>

*Tags:* `Allocations`

#### Input Parameters
* `projectId` - _required_ - Internal Meisterplan identifier<br/>
* `scenarioId` - _required_ - Internal Meisterplan identifier<br/>

### Get Allocations by ID
> Returns the individual allocation specified by the given ID.<br/>

*Tags:* `Allocations`

#### Input Parameters
* `allocationId` - _required_ - Internal Meisterplan identifier<br/>
* `projectId` - _required_ - Internal Meisterplan identifier<br/>
* `scenarioId` - _required_ - Internal Meisterplan identifier<br/>

### Delete Allocations
> Deletes an allocation in a given project of a scenario.<br/>

*Tags:* `Allocations`

#### Input Parameters
* `allocationId` - _required_ - Internal Meisterplan identifier<br/>
* `projectId` - _required_ - Internal Meisterplan identifier<br/>
* `scenarioId` - _required_ - Internal Meisterplan identifier<br/>

### Update Allocations
> Perform an update on an allocation specified by the given ID.<br/>

*Tags:* `Allocations`

#### Input Parameters
* `allocationId` - _required_ - Internal Meisterplan identifier<br/>
* `projectId` - _required_ - Internal Meisterplan identifier<br/>
* `scenarioId` - _required_ - Internal Meisterplan identifier<br/>

### Create Financials
> Returns the newly created financial event.<br/>

*Tags:* `Financials`

#### Input Parameters
* `projectId` - _required_ - Internal Meisterplan identifier<br/>
* `scenarioId` - _required_ - Internal Meisterplan identifier<br/>

### Get Financials by ID
> Returns the individual financial event specified by the given ID.<br/>

*Tags:* `Financials`

#### Input Parameters
* `financialsId` - _required_ - Internal Meisterplan identifier<br/>
* `projectId` - _required_ - Internal Meisterplan identifier<br/>
* `scenarioId` - _required_ - Internal Meisterplan identifier<br/>

### Delete Financials
> Deletes a financial event in a given project of a scenario.<br/>

*Tags:* `Financials`

#### Input Parameters
* `financialsId` - _required_ - Internal Meisterplan identifier<br/>
* `projectId` - _required_ - Internal Meisterplan identifier<br/>
* `scenarioId` - _required_ - Internal Meisterplan identifier<br/>

### Update Financials
> Updates a financial event by ID in a given project of a scenario.<br/>

*Tags:* `Financials`

#### Input Parameters
* `financialsId` - _required_ - Internal Meisterplan identifier<br/>
* `projectId` - _required_ - Internal Meisterplan identifier<br/>
* `scenarioId` - _required_ - Internal Meisterplan identifier<br/>

### Create Milestones
> Returns the newly created milestone<br/>

*Tags:* `Milestones`

#### Input Parameters
* `projectId` - _required_ - Internal Meisterplan identifier<br/>
* `scenarioId` - _required_ - Internal Meisterplan identifier<br/>

### Get Milestones by ID
> Returns the individual milestone specified by the given ID.<br/>

*Tags:* `Milestones`

#### Input Parameters
* `milestoneId` - _required_ - Internal Meisterplan identifier<br/>
* `projectId` - _required_ - Internal Meisterplan identifier<br/>
* `scenarioId` - _required_ - Internal Meisterplan identifier<br/>

### Delete Milestones
> Deletes a milestone in a given project of a scenario.<br/>

*Tags:* `Milestones`

#### Input Parameters
* `milestoneId` - _required_ - Internal Meisterplan identifier<br/>
* `projectId` - _required_ - Internal Meisterplan identifier<br/>
* `scenarioId` - _required_ - Internal Meisterplan identifier<br/>

### Update Milestones
> Perform an update on a milestone specified by the given ID.<br/>

*Tags:* `Milestones`

#### Input Parameters
* `milestoneId` - _required_ - Internal Meisterplan identifier<br/>
* `projectId` - _required_ - Internal Meisterplan identifier<br/>
* `scenarioId` - _required_ - Internal Meisterplan identifier<br/>

### Get the capacity segments of a role
> Returns the capacity segments for the role specified by the given ID. Returns an empty list if no capacity segments exist.<br/>

*Tags:* `Role Capacities`

#### Input Parameters
* `roleId` - _required_ - Internal Meisterplan identifier<br/>
* `scenarioId` - _required_ - Internal Meisterplan identifier<br/>

### Update the capacity segments of a role
> Updates the capacity segments for the role specified by the given ID. To erase all capacity segments, send a segment without start or finish and 0 capacity<br/>

*Tags:* `Role Capacities`

#### Input Parameters
* `roleId` - _required_ - Internal Meisterplan identifier<br/>
* `scenarioId` - _required_ - Internal Meisterplan identifier<br/>

## License

: meister<br/>
                    <br/>

All files of this connector are licensed under the Apache 2.0 License. For details
see the file LICENSE on the toplevel directory.
