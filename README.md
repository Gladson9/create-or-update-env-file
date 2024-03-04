# Create or update env file

Github Action to create or update a .env file. This action will look for env variables that has prefix `ENV_` and then generates or updates the file based on options provided. This action will even pick env variables prefixed with `ENV_` which are globally present in the workflow.

## Inputs

<table>
    <tr>
        <th>Input name</th>
        <th>Description</th>
        <th>Default Value</th>
      </tr>
      <tr>
        <td>file-name</td>
        <td>File name for the .env file.</td>
        <td>.env</td>
      </tr>
      <tr>
        <td>directory-path</td>
        <td>Directory path to create or update the .env file in.</td>
        <td>Root project directory</td>
      </tr>
      <tr>
        <td>append</td>
        <td>Append the key-value pairs to the existing .env file.</td>
        <td>false</td>
      </tr>
</table>
