from flask import Flask
from flask import jsonify, Response

# import pandas as pd
# import numpy as np
from model import pd

# create the Flask app
app = Flask(__name__)


@app.route('/')
def toptentreestempelhof():

    # Missing values
    na_vals = ["-"]
    # These commands load the trees datasets
    df_tempelhofGG40 = pd.read_excel(
        "app/datasets/tempelhofGG40.xls", na_values=na_vals)
    df_tempelhofK40 = pd.read_excel(
        "app/datasets/tempelhofK40.xls", na_values=na_vals)
    df_tempelhof = pd.concat(
        [df_tempelhofGG40, df_tempelhofK40], ignore_index=True)

    # Show me top 10 types of trees in district (abs.) VERSION 1
    toptentrees = df_tempelhof["Baumart deutsch"].value_counts().nlargest(
        n=20).to_json()
    print(toptentrees)
    return toptentrees

    # # Show me top 10 types of trees in district (abs.) VERSION 2
    # toptentrees = df_tempelhof["Baumart deutsch"].value_counts().nlargest(
    #     n=10)
    # return Response(toptentrees.to_json(), mimetype='application/json')

    # # quick look about the information of the dataframe
    # exampleten = df_tempelhof.head(10).to_json()
    # return exampleten


# def predict_static():
#     # read static timesheets
#     df = pd.read_csv("data/superhero_timesheets.csv")
#     df["date"] = pd.to_datetime(df["date"])

#     today = pd.Timestamp.now().floor("D")
#     pred = forecaster[forecaster.date < str(today)].tail(7).crisis.median()
#     print(pred)

#     roster = df[df.date >= today].reset_index()
#     actives = ", ".join(roster[roster.active_on_duty == 1].superhero.unique().tolist())
#     n_result = roster.active_on_duty.sum()
#     print(today)
#     print(roster)

#     screwed_perc =  float(pred - n_result)/pred * 100 if pred > n_result else 0
#     return f"<h3>Hello, NYC is {screwed_perc}% screwed today!</h3><br/>{actives} are on the job."


# def predict_backend():
#     today = pd.Timestamp.now().date()
#     pred = forecaster[forecaster.date < str(today)].tail(7).crisis.median()
#     print(pred)

#     # fetch results/timesheets from back-end
#     roster = pd.DataFrame([
#         doc.to_dict() for doc in db.collection(u"superhero_timesheets").where(u"date", u">=", str(today)).stream()
#     ])

#     actives = ", ".join(roster[roster.active_on_duty == 1].superhero.unique().tolist())
#     n_result = roster.active_on_duty.sum()
#     print(today)
#     print(roster)
#     screwed_perc =  float(pred - n_result)/pred * 100 if pred > n_result else 0
#     return f"<h3>Hello, NYC is {screwed_perc}% screwed today!</h3><br/>{actives} are on the job."
if __name__ == "__main__":
    app.run()
