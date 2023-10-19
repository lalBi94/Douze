import CheatMesh from "../../Components/CheatMesh/CheatMesh";

export default function Simflouz({ data }) {
  return (
    <>
      {Object.keys(data).length > 0 ? (
        Object.keys(data).map((key) => (
          <CheatMesh
            title={data[key].title}
            code={
              data[key].args_i && data[key].args_r ? (
                <div className="code-spec">
                  <code>{data[key].code}</code>

                  {data[key].args_i.map((value, index) => (
                    <input type="text" placeholder={value} key={index} />
                  ))}

                  <select>
                    {data[key].args_r.map((value, index) => (
                      <option id={index} value={data[key].args_r_v[index]}>
                        {value}
                      </option>
                    ))}
                  </select>
                </div>
              ) : data[key].args_i || data[key].args_r ? (
                <div className="code-spec">
                  <code>{data[key].code}</code>

                  {data[key].args_i ? (
                    data[key].args_i.map((value, index) => (
                      <input type="text" placeholder={value} key={index} />
                    ))
                  ) : (
                    <select>
                      {data[key].args_r.map((value, index) => (
                        <option value={data[key].args_r_v[index]} id={index}>
                          {value}
                        </option>
                      ))}
                    </select>
                  )}
                </div>
              ) : (
                <code>{data[key].code}</code>
              )
            }
            desc={data[key].desc}
          />
        ))
      ) : (
        <p style={{ color: "red" }}>Pas de code de triche</p>
      )}
    </>
  );
}