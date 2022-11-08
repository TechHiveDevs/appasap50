
import { 
  Create,
  SimpleForm,
  
required,
TextInput,
AutocompleteInput,
} from "react-admin";

// ------------------------------------------------

export default function CreateBlankevaluationform(props: any) {
    return (
      <Create>
        <SimpleForm redirect="list">
          <TextInput source="name" variant="outlined" validate={required()}  />
<TextInput source="text" variant="outlined" validate={required()}  />
<AutocompleteInput variant="outlined" source="formcategories" choices={[
{ id: "Facilities", name: "Facilities" },
{ id: "Instructor", name: "Instructor" },
{ id: "Course", name: "Course" },
]}  />

        </SimpleForm>
      </Create>
    );
  }
