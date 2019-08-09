from flask import Flask, make_response
from flask_restful import Resource, Api
from flask_cors import CORS
import os
import json

app = Flask(__name__)
CORS(app)
api = Api(app)

def makeTitle(name):
  return name.capitalize().replace('-', ' ')

def folderContent(path):
  indexFile = f'{path}/index.json'

  folders = []
  notes = []

  if os.path.isfile(indexFile):
    with open(indexFile) as index:
      folders = json.load(index)
  else:
    files = os.listdir(path)
    for file in files:
      filePath = f'{path}/{file}'
      if os.path.isdir(filePath):
        folders.append({'link': file, 'name': makeTitle(file)})
      else:
        link = os.path.splitext(file)[0]
        notes.append({'link': link, 'name': makeTitle(link)})

  return folders, notes

class Folder(Resource):
  def get(self, path = ''):
    if path == '':
      syspath = '../notes'
    else:
      syspath = f'../notes/{path}'

    note = None
    if os.path.isdir(syspath):  
      folders, notes = folderContent(syspath)
    elif os.path.isfile(f'{syspath}.md'):
      parent = os.path.dirname(syspath)
      folders, notes = folderContent(parent)
      note = os.path.basename(path)

    return {'folders': folders, 'notes': notes, 'note': note}

class Note(Resource):
  def get(self, path = ''):
    if path != '':
      path = '/' + path
    
    with open(f'../notes{path}.md') as file:
      content = file.read()

    response = make_response(content)
    response.headers['content-type'] = 'text/plain; charser=utf-8'
    return response

api.add_resource(Folder, 
  '/api/tree', 
  '/api/tree/<path:path>/'
)

api.add_resource(Note, 
  '/api/note', 
  '/api/note/<path:path>/'
)

if __name__ == '__main__':
  app.run(debug=True)