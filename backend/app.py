from flask import Flask, request, jsonify

app = Flask(__name__)

items = [
    {"id": 1, "name": "Laptop"},
    {"id": 2, "name": "Teclado"}
]
next_id = 3

@app.route('/items', methods=['GET'])
def get_items():
    """Esta función devuelve la lista completa de items en formato JSON."""
    return jsonify(items)

@app.route('/items', methods=['POST'])
def add_item():
    """Esta función añade un nuevo item a nuestra lista."""
    global next_id 

    if not request.json or not 'name' in request.json:
        return jsonify({"error": "Datos inválidos"}), 400
        
    new_item_data = request.get_json()
    
    new_item = {
        'id': next_id,
        'name': new_item_data['name']
    }
    
    items.append(new_item)
    next_id += 1
    
    return jsonify(new_item), 201

if __name__ == '__main__':

    app.run(host='0.0.0.0', port=5000, debug=True)