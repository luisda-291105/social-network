import NavBar from "../components/NavBar";

export default function NotFound() {
    return (
        <>
            <NavBar />
            <div
                className="d-flex flex-column align-items-center justify-content-center text-center py-5"
                style={{ minHeight: "100vh" }}
            >
                <div
                    style={{
                        fontSize: "7rem",
                        fontWeight: 700,
                        lineHeight: 1,
                        opacity: 0.08,
                        letterSpacing: "-4px",
                        userSelect: "none",
                    }}
                >
                    404
                </div>

                <div style={{ marginTop: "-5rem" }}>
                    <div
                        className="rounded-circle d-flex align-items-center justify-content-center mx-auto mb-4"
                        style={{
                            width: 72,
                            height: 72,
                            background: "#f5f5f5",
                            border: "1px solid #e0e0e0",
                        }}
                    >
                        <svg
                            width="32"
                            height="32"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#888"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <circle cx="11" cy="11" r="8" />
                            <line x1="21" y1="21" x2="16.65" y2="16.65" />
                            <line x1="11" y1="8" x2="11" y2="12" />
                            <circle cx="11" cy="15" r="0.5" fill="#888" />
                        </svg>
                    </div>

                    <h1 className="mb-2 fs-4 fw-medium">
                        Página no encontrada
                    </h1>
                    <p
                        className="text-secondary mb-4"
                        style={{ maxWidth: 340, margin: "0 auto 1.5rem" }}
                    >
                        La ruta que buscas no existe o fue movida a otro lugar.
                    </p>

                    <div className="d-flex gap-2 justify-content-center flex-wrap">
                        <a
                            href="/"
                            className="btn btn-dark px-4"
                            style={{ borderRadius: 8 }}
                        >
                            Ir al inicio
                        </a>
                        <button
                            onClick={() => window.history.back()}
                            className="btn btn-outline-secondary px-4"
                            style={{ borderRadius: 8 }}
                        >
                            Volver atrás
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
