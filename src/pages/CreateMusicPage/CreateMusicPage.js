import useForm from "../../hooks/useForm"

function CreateMusicPage(params) {
    const [form, onChange] = useForm({ email: "", password: "" })

    return (
        <div>

            <h1>createMusicPage</h1>
            <input name="subtitle" onChange={onChange} placeholder="subtitle" value={form.email}></input>
            <input name="album" onChange={onChange} placeholder="album" value={form.email}></input>


            {/* <input name="genre" onChange={onChange} placeholder="genre" value={form.email}></input> */}
{/* Genre fazer com todos os types existentes, sendo adicionar 1 a 1, ou por option/seçect */}



        </div>
    )
}

export default CreateMusicPage