import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export default function ItinerarioEmpresa() {
  const [itinerario, setItinerario] = useState([
    { hora: '9:00 AM', actividad: 'Reunión con equipo de supervisores' },
    { hora: '11:00 AM', actividad: 'Llamada con la community manager' },
  ]);
  const [nuevo, setNuevo] = useState({ hora: '', actividad: '' });
  const [modoEdicion, setModoEdicion] = useState(false);

  const agregarActividad = () => {
    if (nuevo.hora && nuevo.actividad) {
      setItinerario([...itinerario, nuevo]);
      setNuevo({ hora: '', actividad: '' });
    }
  };

  const eliminarActividad = (index) => {
    setItinerario(itinerario.filter((_, i) => i !== index));
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Itinerario Diario</h1>

      {itinerario.map((item, index) => (
        <Card key={index} className="mb-3">
          <CardContent className="p-4 flex justify-between items-center">
            <div>
              <p className="text-lg font-semibold">{item.hora}</p>
              <p className="text-sm text-gray-600">{item.actividad}</p>
            </div>
            {modoEdicion && (
              <Button variant="destructive" onClick={() => eliminarActividad(index)}>
                Eliminar
              </Button>
            )}
          </CardContent>
        </Card>
      ))}

      {modoEdicion && (
        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-2">Agregar nueva actividad</h2>
          <Input
            className="mb-2"
            placeholder="Hora (ej: 2:00 PM)"
            value={nuevo.hora}
            onChange={(e) => setNuevo({ ...nuevo, hora: e.target.value })}
          />
          <Textarea
            className="mb-2"
            placeholder="Descripción de la actividad"
            value={nuevo.actividad}
            onChange={(e) => setNuevo({ ...nuevo, actividad: e.target.value })}
          />
          <Button onClick={agregarActividad}>Agregar</Button>
        </div>
      )}

      <div className="mt-6">
        <Button onClick={() => setModoEdicion(!modoEdicion)}>
          {modoEdicion ? 'Salir del modo edición' : 'Entrar en modo edición'}
        </Button>
      </div>
    </div>
  );
}
