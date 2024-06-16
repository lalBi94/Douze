import { useState, useEffect } from "react";
import Layout from "./../../Layout/Layout";
import sf from "../../Assets/cheats/cheats_simflouz.json";
import c from "../../Assets/cheats/cheats_construction.json";
import p from "../../Assets/cheats/cheats_personnage.json";
import CheatMesh from "../../Components/CheatMesh/CheatMesh";

export default function Like() {
    const [components, setComponents] = useState([]);

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("like"));

        if (!data) {
            return;
        }

        const toPush = [];

        for (let e of data) {
            const prefix = e.split("_")[0];

            switch (prefix) {
                case "p": {
                    toPush.push(
                        <CheatMesh
                            meta={e}
                            title={p[e].title}
                            code={
                                p[e].args_i && p[e].args_r ? (
                                    <div className="code-spec">
                                        <code>{p[e].code}</code>

                                        {p[e].args_i.map((value, index) => (
                                            <input
                                                key={index}
                                                type="text"
                                                placeholder={value}
                                            />
                                        ))}

                                        <select>
                                            {p[e].args_r.map((value, index) => (
                                                <option
                                                    key={index}
                                                    id={index}
                                                    value={p[e].args_r_v[index]}
                                                >
                                                    {value}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                ) : p[e].args_i || p[e].args_r ? (
                                    <div className="code-spec">
                                        <code>{p[e].code}</code>

                                        {p[e].args_i ? (
                                            p[e].args_i.map((value, index) => (
                                                <input
                                                    key={index}
                                                    type="text"
                                                    placeholder={value}
                                                />
                                            ))
                                        ) : (
                                            <select>
                                                {p[e].args_r.map(
                                                    (value, index) => (
                                                        <option
                                                            value={
                                                                p[e].args_r_v[
                                                                    index
                                                                ]
                                                            }
                                                            id={index}
                                                            key={index}
                                                        >
                                                            {value}
                                                        </option>
                                                    )
                                                )}
                                            </select>
                                        )}
                                    </div>
                                ) : (
                                    <code>{p[e].code}</code>
                                )
                            }
                            desc={p[e].desc}
                        />
                    );

                    break;
                }

                case "sf": {
                    toPush.push(
                        <CheatMesh
                            meta={e}
                            title={sf[e].title}
                            code={
                                sf[e].args_i && sf[e].args_r ? (
                                    <div className="code-spec">
                                        <code>{sf[e].code}</code>

                                        {sf[e].args_i.map((value, index) => (
                                            <input
                                                key={index}
                                                type="text"
                                                placeholder={value}
                                            />
                                        ))}

                                        <select>
                                            {sf[e].args_r.map(
                                                (value, index) => (
                                                    <option
                                                        key={index}
                                                        id={index}
                                                        value={
                                                            sf[e].args_r_v[
                                                                index
                                                            ]
                                                        }
                                                    >
                                                        {value}
                                                    </option>
                                                )
                                            )}
                                        </select>
                                    </div>
                                ) : sf[e].args_i || sf[e].args_r ? (
                                    <div className="code-spec">
                                        <code>{sf[e].code}</code>

                                        {sf[e].args_i ? (
                                            sf[e].args_i.map((value, index) => (
                                                <input
                                                    key={index}
                                                    type="text"
                                                    placeholder={value}
                                                />
                                            ))
                                        ) : (
                                            <select>
                                                {sf[e].args_r.map(
                                                    (value, index) => (
                                                        <option
                                                            value={
                                                                sf[e].args_r_v[
                                                                    index
                                                                ]
                                                            }
                                                            id={index}
                                                            key={index}
                                                        >
                                                            {value}
                                                        </option>
                                                    )
                                                )}
                                            </select>
                                        )}
                                    </div>
                                ) : (
                                    <code>{sf[e].code}</code>
                                )
                            }
                            desc={sf[e].desc}
                        />
                    );
                    break;
                }

                case "c": {
                    toPush.push(
                        <CheatMesh
                            meta={e}
                            title={c[e].title}
                            code={
                                c[e].args_i && c[e].args_r ? (
                                    <div className="code-spec">
                                        <code>{c[e].code}</code>

                                        {c[e].args_i.map((value, index) => (
                                            <input
                                                key={index}
                                                type="text"
                                                placeholder={value}
                                            />
                                        ))}

                                        <select>
                                            {c[e].args_r.map((value, index) => (
                                                <option
                                                    key={index}
                                                    id={index}
                                                    value={c[e].args_r_v[index]}
                                                >
                                                    {value}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                ) : c[e].args_i || c[e].args_r ? (
                                    <div className="code-spec">
                                        <code>{c[e].code}</code>

                                        {c[e].args_i ? (
                                            c[e].args_i.map((value, index) => (
                                                <input
                                                    key={index}
                                                    type="text"
                                                    placeholder={value}
                                                />
                                            ))
                                        ) : (
                                            <select>
                                                {c[e].args_r.map(
                                                    (value, index) => (
                                                        <option
                                                            value={
                                                                c[e].args_r_v[
                                                                    index
                                                                ]
                                                            }
                                                            id={index}
                                                            key={index}
                                                        >
                                                            {value}
                                                        </option>
                                                    )
                                                )}
                                            </select>
                                        )}
                                    </div>
                                ) : (
                                    <code>{c[e].code}</code>
                                )
                            }
                            desc={c[e].desc}
                        />
                    );
                    break;
                }

                default: {
                    console.log("unknown prefix");
                    break;
                }
            }

            setComponents(toPush);
        }
    }, []);

    return (
        <Layout>{Object.keys(components).map((v, i) => components[i])}</Layout>
    );
}
