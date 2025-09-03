import React from 'react';

function TestSimple() {
  return (
    <div>
      {/* Test básico sin ninguna clase para ver si React funciona */}
      <h1>Test básico - React funciona</h1>
      
      {/* Test para ver si el CSS se carga */}
      <div className="test-css-loaded">
        <h2>Test CSS Loading - Si ves esto naranja, el CSS se está cargando</h2>
      </div>
      
      {/* Test con clases básicas de Tailwind */}
      <div className="bg-red-500 text-white p-4 m-4">
        <h2>Test Tailwind - Si ves esto rojo, Tailwind funciona</h2>
      </div>
      
      {/* Test con clases de utilidad */}
      <div className="flex gap-4 p-4">
        <div className="bg-blue-500 text-white p-2 rounded">Div 1</div>
        <div className="bg-green-500 text-white p-2 rounded">Div 2</div>
      </div>
      
      {/* Test con grid */}
      <div className="grid grid-cols-2 gap-4 p-4">
        <div className="bg-purple-500 text-white p-4">Grid 1</div>
        <div className="bg-orange-500 text-white p-4">Grid 2</div>
      </div>
    </div>
  );
}

export default TestSimple;
