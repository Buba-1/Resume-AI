import React from "react";
import "./defaultdesign.css";

const DefaultDesign = ({ userDetails = [], userRef = [], userData = {} }) => {
  // Sample data generated inside the component
  const sampleData = {
    name: userData?.name || "John Doe",
    email: userData?.email || "johndoe@example.com",
    phone: userData?.phone || "+1 555 123 4567",
    website: userData?.website || "https://johndoe.dev",
    linkName: userData?.linkName || "Portfolio",
  };

  return (
    <div className="default-body">
      {/* Header Section */}
      <div className="resume-header">
        <h1 className="resume-name">{sampleData.name}</h1>

        <div className="resume-contact">
          <p>
            Email: <span>{sampleData.email}</span>
          </p>
          <p>
            Phone: <span>{sampleData.phone}</span>
          </p>
          <p>
            Website:{" "}
            <a
              href={sampleData.website}
              target="_blank"
              rel="noopener noreferrer"
            >
              {sampleData.website}
            </a>
          </p>
          <p>
            {sampleData.linkName}:{" "}
            <a
              href={sampleData.website}
              target="_blank"
              rel="noopener noreferrer"
            >
              {sampleData.linkName}
            </a>
          </p>
        </div>
      </div>

      {/* Resume sections */}
      <div className="sections">
        {Array.isArray(userDetails) &&
          userDetails.length > 0 &&
          userDetails.map((item, index) => (
            <section key={index} className="resume-section">
              {/* Title check */}
              {item?.title && <h2 className="section-title">{item.title}</h2>}

              {/* Description check */}
              {item?.Description && (
                <p className="section-description">{item.Description}</p>
              )}

              {/* Bulletpoints check */}
              {Array.isArray(item?.bulletpoints) &&
                item.bulletpoints.length > 0 && (
                  <ul className="bullet-list">
                    {item.bulletpoints.map((point, idx) => (
                      <li key={idx} className="bullet-item">
                        {point}
                      </li>
                    ))}
                  </ul>
                )}
            </section>
          ))}
      </div>

      {/* References Section */}
      {Array.isArray(userRef) && userRef.length > 0 && (
        <aside className="references">
          <h2 className="references-title">References</h2>

          <div className="refs-list">
            {userRef.map((ref, i) => (
              <div key={i} className="ref-item">
                <div className="ref-left">
                  {/* Name */}
                  {ref?.name && <p className="ref-name">{ref.name}</p>}

                  {/* Institute */}
                  {ref?.institute && (
                    <p className="ref-institute">{ref.institute}</p>
                  )}
                </div>

                <div className="ref-right">
                  {/* Details / Role */}
                  {ref?.details && <p className="ref-details">{ref.details}</p>}

                  {/* Contact */}
                  <div className="ref-contact">
                    {ref?.phone && (
                      <span className="ref-phone">📞 {ref.phone}</span>
                    )}
                    {ref?.email && (
                      <span className="ref-email">✉️ {ref.email}</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </aside>
      )}
    </div>
  );
};

export default DefaultDesign;
