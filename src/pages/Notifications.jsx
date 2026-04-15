import NavBar from "../components/NavBar";

const notifications = [
    {
        id: 1,
        initials: "CR",
        name: "Carlos Ruiz",
        text: "aceptó tu solicitud de amistad.",
        time: "Hace 5 minutos",
        read: false,
    },
    {
        id: 2,
        initials: "LM",
        name: "Laura Méndez",
        text: "comentó tu publicación.",
        time: "Hace 20 minutos",
        read: false,
    },
    {
        id: 3,
        initials: "AT",
        name: "Andrés Torres",
        text: "te envió una solicitud de amistad.",
        time: "Hace 1 hora",
        read: false,
    },
    {
        id: 4,
        initials: "SV",
        name: "Sofia Vargas",
        text: "le dio me gusta a tu foto.",
        time: "Ayer · 6:30 pm",
        read: true,
    },
    {
        id: 5,
        initials: "JP",
        name: "Juan Pérez",
        text: "te mencionó en un comentario.",
        time: "Ayer · 3:15 pm",
        read: true,
    },
];

export default function Notifications() {
    return (
        <>
            <NavBar />
            <div className="p-4" style={{ maxWidth: 480 }}>
                <p className="text-muted small mb-3">
                    Notificaciones · {notifications.length}
                </p>
                <div className="d-flex flex-column gap-2">
                    {notifications.map((n) => (
                        <div
                            key={n.id}
                            className={`d-flex align-items-center gap-3 p-3 rounded-3 border ${
                                !n.read
                                    ? "bg-primary bg-opacity-10"
                                    : "bg-white"
                            }`}
                        >
                            <div
                                className="rounded-circle bg-light d-flex align-items-center
                          justify-content-center fw-medium flex-shrink-0"
                                style={{ width: 40, height: 40, fontSize: 13 }}
                            >
                                {n.initials}
                            </div>
                            <div className="flex-grow-1">
                                <p className="mb-0" style={{ fontSize: 13 }}>
                                    <span className="fw-medium">{n.name}</span>{" "}
                                    {n.text}
                                </p>
                                <p
                                    className="text-muted mb-0"
                                    style={{ fontSize: 11 }}
                                >
                                    {n.time}
                                </p>
                            </div>
                            {!n.read && (
                                <div
                                    className="rounded-circle border border-primary flex-shrink-0"
                                    style={{ width: 8, height: 8 }}
                                />
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
