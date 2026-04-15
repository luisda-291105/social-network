import NavBar from "../components/NavBar";

export default function Friend() {
    const requests = [
        { id: 1, initials: "CR", name: "Carlos Ruiz", mutual: 12 },
        { id: 2, initials: "LM", name: "Laura Méndez", mutual: 5 },
        { id: 3, initials: "AT", name: "Andrés Torres", mutual: 3 },
        { id: 4, initials: "SV", name: "Sofia Vargas", mutual: 8 },
    ];
    return (
        <>
            <NavBar />
            <div className="p-4">
                <p className="text-muted small mb-3">
                    Solicitudes de amistad · {requests.length}
                </p>
                <div className="row g-3">
                    {requests.map((r) => (
                        <div key={r.id} className="col-6 col-md-3">
                            <div className="card text-center p-3 h-100">
                                <div
                                    className="rounded-circle bg-primary bg-opacity-10 text-primary
                            d-flex align-items-center justify-content-center
                            fw-medium mx-auto mb-2"
                                    style={{ width: 52, height: 52 }}
                                >
                                    {r.initials}
                                </div>
                                <p
                                    className="fw-medium mb-0"
                                    style={{ fontSize: 14 }}
                                >
                                    {r.name}
                                </p>
                                <p
                                    className="text-muted mb-3"
                                    style={{ fontSize: 12 }}
                                >
                                    {r.mutual} amigos en común
                                </p>
                                <div className="d-flex gap-2">
                                    <button className="btn btn-primary btn-sm flex-fill">
                                        Aceptar
                                    </button>
                                    <button className="btn btn-outline-secondary btn-sm flex-fill">
                                        Rechazar
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
