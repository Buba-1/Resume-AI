import React from "react";

const DefaulDesign = ({ color, object, imageUrl }) => {
  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "#f7f9fc",
        padding: "0px",
        margin: "0px",
      }}
    >
      <div>
        {/* ------------------------- PERSONAL DETAILS ------------------------- */}
        {object?.personalObject && (
          <div
            style={{
              width: "100%",
              backgroundColor: color || "#000080",
              padding: "20px",
              margin: "0px",
              color: "lightgrey",
            }}
          >
            <p
              style={{
                color: "white",
                fontFamily: "sherif",
                fontSize: "14px",
                fontWeight: "300",
              }}
            >
              Hello, I am
            </p>

            {object.personalObject.name && (
              <p
                style={{
                  color: "white",
                  fontFamily: "Arial",
                  fontSize: "50px",
                  fontWeight: "bold",
                  marginBottom: "5px",
                  marginTop: "5px",
                }}
              >
                {object.personalObject.name}
              </p>
            )}

            {(object.personalObject.email || object.personalObject.phone) && (
              <p
                style={{
                  color: "white",
                  fontFamily: "sherif",
                  fontSize: "14px",
                  fontWeight: "300",
                  marginBottom: "5px",
                }}
              >
                email :{" "}
                <span
                  style={{
                    color: "whitesmoke",
                    fontFamily: "sherif",
                    fontSize: "14px",
                    fontWeight: "600",
                  }}
                >
                  {object.personalObject.email}
                </span>
              </p>
            )}

            {(object.personalObject.phone || object.personalObject.email) && (
              <p
                style={{
                  color: "white",
                  fontFamily: "sherif",
                  fontSize: "14px",
                  fontWeight: "300",
                  marginBottom: "5px",
                }}
              >
                phone{" "}
                <span
                  style={{
                    color: "whitesmoke",
                    fontFamily: "sherif",
                    fontSize: "14px",
                    fontWeight: "600",
                  }}
                >
                  {object.personalObject.phone}
                </span>
              </p>
            )}

            {object.personalObject.address && (
              <p
                style={{
                  color: "white",
                  fontFamily: "sherif",
                  fontSize: "14px",
                  fontWeight: "300",
                  marginBottom: "5px",
                }}
              >
                address{" "}
                <span
                  style={{
                    color: "whitesmoke",
                    fontFamily: "sherif",
                    fontSize: "14px",
                    fontWeight: "600",
                  }}
                >
                  {object.personalObject.address}
                </span>
              </p>
            )}

            {(object.personalObject.websitename ||
              object.personalObject.websitelink) && (
              <p
                style={{
                  color: "white",
                  fontFamily: "sherif",
                  fontSize: "14px",
                  fontWeight: "300",
                  marginBottom: "5px",
                }}
              >
                {object.personalObject.websitename}
                <span
                  style={{
                    color: "whitesmoke",
                    fontFamily: "sherif",
                    fontSize: "14px",
                    fontWeight: "600",
                  }}
                >
                  {object.personalObject.websitelink}
                </span>
              </p>
            )}
          </div>
        )}

        {/* ------------------------- BODY SECTION ------------------------------ */}
        {object?.bodyArrayData?.length > 0 && (
          <div
            style={{
              width: "100%",
              backgroundColor: "",
              padding: "20px",
              margin: "0px",
            }}
          >
            {object.bodyArrayData.map((item, index) => (
              <div
                style={{
                  marginTop: "16px",
                  marginBottom: "16px",
                  borderBottom: "1px solid #000080",
                }}
                key={index}
              >
                {item.title && (
                  <p
                    style={{
                      marginBottom: "5px",
                      fontSize: "20px",
                      fontWeight: "600",
                      color: "#000080",
                      fontFamily: "Arial",
                      paddingBottom: "10px",
                    }}
                  >
                    {item.title}
                  </p>
                )}
                {item.description && (
                  <p
                    style={{
                      marginBottom: "5px",
                      fontSize: "16px",
                      paddingBottom: "10px",
                    }}
                  >
                    {item.description}
                  </p>
                )}

                {item.bulletpoints?.length > 0 && (
                  <div
                    style={{
                      marginBottom: "5px",
                      paddingBottom: "10px",
                      fontSize: "14px",
                      paddingLeft: "20px",
                      color: "grey",
                    }}
                  >
                    <ul
                      style={{
                        marginBottom: "5px",
                        fontSize: "14px",
                        paddingLeft: "20px",
                        color: "grey",

                        // Two-column layout
                        columnCount: 2,
                        columnGap: "12px",
                      }}
                    >
                      {item.bulletpoints.map((point, idx) => (
                        <li key={idx} style={{ marginBottom: "4px" }}>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
            {(!object?.referenceArrayData ||
              object.referenceArrayData.length === 0) && (
              <div
                style={{
                  backgroundColor: "#000080",
                  width: "100%",
                  height: "70px",
                }}
              ></div>
            )}
          </div>
        )}

        {/* ------------------------- REFERENCES ------------------------------ */}
        {object?.referenceArrayData?.length > 0 && (
          <div
            style={{
              paddingBottom: "25px",
              fontSize: "14px",
              paddingLeft: "20px",
            }}
          >
            <p
              style={{
                marginBottom: "5px",
                fontSize: "16px",
                paddingBottom: "10px",
                fontSize: "20px",
                fontWeight: "600",
                color: "#000080",
                fontFamily: "Arial",
              }}
            >
              References
            </p>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                columnGap: "20px",
                //justifyContent: "space-around",
              }}
            >
              {object.referenceArrayData.map((ref, index) => (
                <div
                  key={index}
                  style={{
                    //width: "50%",
                    paddingRight: "20px",
                    marginTop: "20px",
                  }}
                >
                  {ref.name && (
                    <p
                      style={{
                        marginBottom: "4px",
                        fontSize: "16px",
                        paddingBottom: "0px",
                        fontSize: "17px",
                        fontWeight: "300",
                        color: "grey",
                        fontFamily: "Arial",
                      }}
                    >
                      <strong>{ref.name}</strong>
                    </p>
                  )}

                  {ref.details && (
                    <p
                      style={{
                        marginBottom: "3px",
                        fontSize: "11px",
                        paddingBottom: "0px",
                        fontWeight: "300",
                        color: "black",
                        fontFamily: "Arial",
                      }}
                    >
                      {ref.details}
                    </p>
                  )}
                  {ref.institute && (
                    <p
                      style={{
                        marginBottom: "3px",
                        fontSize: "11px",
                        paddingBottom: "0px",
                        fontWeight: "300",
                        color: "black",
                        fontFamily: "Arial",
                      }}
                    >
                      {ref.institute}
                    </p>
                  )}
                  {ref.phone && (
                    <p
                      style={{
                        marginBottom: "3px",
                        fontSize: "11px",
                        paddingBottom: "0px",
                        fontWeight: "300",
                        color: "black",
                        fontFamily: "Arial",
                      }}
                    >
                      {ref.phone}
                    </p>
                  )}
                  {ref.email && (
                    <p
                      style={{
                        marginBottom: "3px",
                        fontSize: "11px",
                        paddingBottom: "0px",
                        fontWeight: "300",
                        color: "black",
                        fontFamily: "Arial",
                      }}
                    >
                      {ref.email}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      <div
        style={{
          backgroundColor: "#000080",
          width: "100%",
          height: "70px",
        }}
      ></div>
    </div>
  );
};

export default DefaulDesign;
