from flask_table import Table, Col

class Results(Table):
    id = Col('Id', show=False)
    place = Col('Place')
    number = Col('Bus Number')