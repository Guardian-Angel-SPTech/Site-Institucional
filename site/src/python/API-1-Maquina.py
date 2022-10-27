from cgi import print_form
import psutil
from psutil import virtual_memory
import os
from time import sleep
import pymysql
from http import client
from slack_sdk import WebClient


os.system('cls')
while True:
    os.system('cls')
    print('Monitoramento de Máquina Guardian Angel')

    #conexao = pymysql.connect(db='GuardianAngel', user='root', passwd='sptech')
    #cursor = conexao.cursor()



    def convert_gb(value):
        return f'{value /1024/1024/1024: .2f}GB' 

    ram = (virtual_memory().total)/1024/1024/1024
    ramU = (virtual_memory().used)/1024/1024/1024

    #cursor.execute("INSERT INTO registro values (null, 1, 1, %s, now())", (ramU))

    print("Memória RAM sendo utilizada:")
    print('{:.2f}'.format(ramU),'GB') #usando no momento
        

    #uso cpu
    print("=-="*20)
    print("Uso da CPU: ")
    print(psutil.cpu_percent(interval=0),'%')

    #cursor.execute("INSERT INTO registro values (null, 1, 2, %s, now())", (psutil.cpu_percent(interval=0)))

    if os.system == 'nt':
        free_disk=(psutil.disk_usage('C:\\').free)/1024/1024/1024
        percentage_disk=(psutil.disk_usage('C:\\').percent)
        print("=-="*20)
        print("Espaço livre no disco: ")
        print('{:.2f}'.format(free_disk),"GB")

        print("Porcentagem de espaço sendo usado no disco: ")
        print('{:.2f}'.format(percentage_disk),"%")
        print("=-="*20)

        #cursor.execute("INSERT INTO registro values (null, 1, 3, %s, now())", ('{:.2f}'.format(percentage_disk)))

        
    else:
        free_disk=(psutil.disk_usage('/').free)/1024/1024/1024
        percentage_disk=(psutil.disk_usage('/').percent)
        print("=-="*20)
        print("Espaço livre no disco: ")
        print('{:.2f}'.format(free_disk),"GB")

        print("Porcentagem de espaço sendo usado no disco: ")
        print('{:.2f}'.format(percentage_disk),"%")
        print("=-="*20)

        #cursor.execute("INSERT INTO registro values (null, 1, 3, %s, now())", ('{:.2f}'.format(percentage_disk)))

    sleep(3)
    #cursor.fetchall()
    #conexao.commit()
    #conexao.close() 